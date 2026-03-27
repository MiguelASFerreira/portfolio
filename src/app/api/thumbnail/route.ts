import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { env } from "@/env";

const { GITHUB_TOKEN, GITHUB_USERNAME } = env;

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
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/public/thumbnail.png`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3.raw",
        },
        signal: AbortSignal.timeout(8000),
      },
    );

    if (res.status === 404) {
      return redirectToDefaultThumbnail(req);
    }

    if (!res.ok) {
      return redirectToDefaultThumbnail(req);
    }

    const buffer = Buffer.from(await res.arrayBuffer());

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
