import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { env } from "@/env";
import { octokit } from "@/lib/octokit";

const { GITHUB_USERNAME } = env;

const repoSchema = z
  .string()
  .trim()
  .min(1)
  .max(100)
  .regex(/^[a-zA-Z0-9._-]+$/);

const DEFAULT_THUMBNAIL_PATH = "/images/project-thumbnail-default.svg";

function redirectToDefaultThumbnail(req: NextRequest) {
  return NextResponse.redirect(new URL(DEFAULT_THUMBNAIL_PATH, req.url));
}

export async function GET(req: NextRequest) {
  const repoParam = req.nextUrl.searchParams.get("repo");
  const parsedRepo = repoSchema.safeParse(repoParam);

  if (!parsedRepo.success) {
    return redirectToDefaultThumbnail(req);
  }

  const repo = parsedRepo.data;

  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: GITHUB_USERNAME,
      repo,
      path: "public/thumbnail.png",
    });

    if (Array.isArray(data) || data.type !== "file" || !data.content) {
      return redirectToDefaultThumbnail(req);
    }

    const buffer = Buffer.from(data.content, "base64");

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    });
  } catch {
    return redirectToDefaultThumbnail(req);
  }
}
