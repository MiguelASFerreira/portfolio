import { NextRequest, NextResponse } from "next/server";

import { getGitHubProjects } from "@/lib/github";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search") || undefined;

  try {
    const projects = await getGitHubProjects(search);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erro na API GitHub:", error);
    return NextResponse.json(
      { message: "Erro ao buscar projetos" },
      { status: 500 },
    );
  }
}
