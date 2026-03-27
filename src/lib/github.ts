"use server";

import { env } from "@/env";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  owner: {
    login: string;
  };
  archived: boolean;
};

type GitHubTopicsResponse = {
  names: string[];
};

type Project = {
  id: string;
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  topics: string[];
};

const { GITHUB_TOKEN, GITHUB_USERNAME } = env;

if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN não definido no .env.local");
}

const githubHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

const REVALIDATE_SECONDS = 600;
const REQUEST_TIMEOUT_MS = 8000;
const TOPIC_CONCURRENCY = 8;
const MAX_REPOS_TO_PROCESS = 40;
const EXCLUDED_REPOS = new Set(["portfolio"]);

async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  mapper: (item: T, index: number) => Promise<R>,
) {
  const results = new Array<R>(items.length);
  let currentIndex = 0;

  async function worker() {
    while (currentIndex < items.length) {
      const index = currentIndex;
      currentIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => worker(),
  );
  await Promise.all(workers);

  return results;
}

async function fetchGitHubJson<T>(url: string) {
  const response = await fetch(url, {
    headers: githubHeaders,
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Erro GitHub (${response.status})`);
  }

  return (await response.json()) as T;
}

async function fetchTopics(repo: GitHubRepo): Promise<string[]> {
  try {
    const data = await fetchGitHubJson<GitHubTopicsResponse>(
      `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
    );
    return data.names;
  } catch {
    return [];
  }
}

export async function getGitHubProjects() {
  const repos = await fetchGitHubJson<GitHubRepo[]>(
    "https://api.github.com/user/repos?sort=updated&per_page=60&affiliation=owner",
  );

  const filteredRepos = repos
    .filter((repo) => {
      const repoName = repo.name.toLowerCase();
      return (
        !repo.archived &&
        repo.name !== GITHUB_USERNAME &&
        !EXCLUDED_REPOS.has(repoName)
      );
    })
    .slice(0, MAX_REPOS_TO_PROCESS);

  const projectCandidates = await mapWithConcurrency(
    filteredRepos,
    TOPIC_CONCURRENCY,
    async (repo) => {
      const names = await fetchTopics(repo);
      const isHighlight = names.includes("highlights");

      const project: Project = {
        id: repo.id.toString(),
        title: repo.name,
        des: repo.description ?? "Sem descrição.",
        category: repo.language?.toLowerCase() ?? "unknown",
        repo: repo.html_url,
        link: repo.homepage ?? "",
        topics: names.filter((topic) => topic !== "highlights"),
      };

      return { isHighlight, project };
    },
  );

  const highlights: Project[] = [];
  const projects: Project[] = [];

  for (const candidate of projectCandidates) {
    if (candidate.isHighlight) {
      highlights.push(candidate.project);
      continue;
    }

    if (projects.length < 8) {
      projects.push(candidate.project);
    }
  }

  return {
    highlights,
    projects,
  };
}
