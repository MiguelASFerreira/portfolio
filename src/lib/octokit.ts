import { Octokit } from "@octokit/rest";

import { env } from "@/env";

const REVALIDATE_SECONDS = 600;
const REQUEST_TIMEOUT_MS = 8000;

export const octokit = new Octokit({
  auth: env.GITHUB_TOKEN,
  request: {
    fetch: (url: RequestInfo | URL, options?: RequestInit) =>
      fetch(url, {
        ...options,
        next: { revalidate: REVALIDATE_SECONDS },
        signal: options?.signal ?? AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      }),
  },
});
