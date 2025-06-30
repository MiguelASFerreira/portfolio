import { NextResponse } from "next/server";

import { getGitHubProjects } from "@/lib/github";

export async function GET() {
  try {
    const projects = await getGitHubProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erro na API GitHub:", error);
    return NextResponse.json(
      { message: "Erro ao buscar projetos" },
      { status: 500 },
    );
  }
}
