/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function getGitHubProjects() {
  const reposRes = await fetch(
    "https://api.github.com/user/repos?sort=updated&per_page=100&affiliation=owner",
    {
      headers: githubHeaders,
      next: { revalidate: 600 },
    },
  );

  if (!reposRes.ok) {
    throw new Error("Erro ao buscar repositórios do GitHub");
  }

  const repos: GitHubRepo[] = await reposRes.json();

  const projects: Project[] = [];
  const highlights: Project[] = [];

  await Promise.all(
    repos.map(async (repo) => {
      const topicsRes = await fetch(
        `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
        {
          headers: githubHeaders,
          next: { revalidate: 600 },
        },
      );

      if (!topicsRes.ok) return;

      const { names }: GitHubTopicsResponse = await topicsRes.json();

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

      if (isHighlight) {
        highlights.push(project);
        return;
      }

      if (projects.length < 8 && repo.name !== GITHUB_USERNAME) {
        projects.push(project);
      }
    }),
  );

  return {
    highlights,
    projects,
  };
}
