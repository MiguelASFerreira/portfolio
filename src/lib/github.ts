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
    `https://api.github.com/user/repos?sort=updated&per_page=100&affiliation=owner`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    },
  );

  const repos = await reposRes.json();

  const projects: any[] = [];
  const highlights: any[] = [];

  for (const repo of repos) {
    const topicsRes = await fetch(
      `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 600 },
      },
    );

    const topicsData = await topicsRes.json();

    const cleanTopics = (topicsData.names || []).filter(
      (topic: string) => topic !== "highlights",
    );

    const projectData = {
      id: repo.id.toString(),
      title: repo.name,
      des: repo.description || "Sem descrição.",
      category: repo.language?.toLowerCase() || "unknown",
      repo: repo.html_url,
      link: repo.homepage || "",
      topics: cleanTopics,
    };

    if (topicsData.names.includes("highlights")) {
      highlights.push(projectData);
    } else if (!topicsData.names.includes("highlights") || projectData.title === GITHUB_USERNAME) {
      if (projects.length < 8) {
        projects.push(projectData);
      }
    }
  }

  return {
    highlights,
    projects,
  };
}
