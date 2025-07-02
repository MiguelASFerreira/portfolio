/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { env } from "@/env";

const GITHUB_USERNAME = env.GITHUB_USERNAME;
const GITHUB_TOKEN = env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN não definido no .env.local");
}

export async function getGitHubProjects() {
  const reposRes = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=last&per_page=8`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      next: { revalidate: 600 },
    },
  );

  const repos = await reposRes.json();

  const projects = await Promise.all(
    repos.map(async (repo: any) => {
      const topicsRes = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 600 },
        },
      );

      const topicsData = await topicsRes.json();

      return {
        id: repo.id.toString(),
        title: repo.name,
        des: repo.description || "Sem descrição.",
        category: repo.language?.toLowerCase() || "unknown",
        repo: repo.html_url,
        link: repo.homepage ? repo.homepage : "",
        topics: topicsData.names || [],
      };
    }),
  );

  return projects;
}
