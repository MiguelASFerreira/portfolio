"use server";

import { env } from "@/env";
import { octokit } from "@/lib/octokit";

type Project = {
  id: string;
  title: string;
  des: string;
  category: string;
  repo: string;
  link: string;
  topics: string[];
};

const { GITHUB_USERNAME } = env;

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

async function fetchTopics(owner: string, repo: string): Promise<string[]> {
  try {
    const { data } = await octokit.rest.repos.getAllTopics({
      owner,
      repo,
    });
    return data.names;
  } catch {
    return [];
  }
}

export async function getGitHubProjects() {
  const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser({
    sort: "updated",
    per_page: 60,
    affiliation: "owner",
  });

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
      const names = await fetchTopics(repo.owner.login, repo.name);
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
