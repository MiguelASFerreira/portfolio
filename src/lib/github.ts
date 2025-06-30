/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axios from "axios";

import { env } from "@/env";

const GITHUB_USERNAME = env.GITHUB_USERNAME;
const GITHUB_TOKEN = env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN não definido no .env.local");
}

// Cache em memória
let cache: {
  data: any[];
  timestamp: number;
} = { data: [], timestamp: 0 };

const CACHE_EXPIRATION = 10 * 60 * 1000; // 10 minutos

export async function getGitHubProjects() {
  const now = Date.now();

  if (cache.data.length > 0 && now - cache.timestamp < CACHE_EXPIRATION) {
    return cache.data;
  }

  const reposRes = await axios.get(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=last&per_page=8`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    },
  );

  const repos = reposRes.data;

  const projects = await Promise.all(
    repos.map(async (repo: any) => {
      const topicsRes = await axios.get(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/topics`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        },
      );

      const topics = topicsRes.data.names || [];

      return {
        id: repo.id.toString(),
        title: repo.name,
        des: repo.description || "Sem descrição.",
        category: repo.language?.toLowerCase() || "unknown",
        repo: repo.html_url,
        link: repo.homepage ? repo.homepage : "",
        topics,
      };
    }),
  );

  cache = { data: projects, timestamp: Date.now() };
  return projects;
}
