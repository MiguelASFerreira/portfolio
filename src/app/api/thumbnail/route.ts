import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME!;

export async function GET(req: NextRequest) {
  const repo = req.nextUrl.searchParams.get("repo");
  if (!repo) {
    return NextResponse.json({ error: "Repo name is required" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/public/thumbnail.png`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
    },
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Thumbnail not found" }, { status: 404 });
  }

  const buffer = Buffer.from(await res.arrayBuffer());

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
