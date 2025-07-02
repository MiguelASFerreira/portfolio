// app/projetos/page.tsx
import { Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getGitHubProjects } from "@/lib/github";

import { CardProject } from "./components/card-project";

export default async function Projetos() {
  const projects = await getGitHubProjects();

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-[80px] py-10">
      <div className="text-center">
        <h1 className="text-principal text-center text-2xl font-bold">
          Projetos
        </h1>
        <span className="text-muted-foreground text-sm">
          Confira alguns dos projetos que desenvolvi aplicando tecnologias
          modernas
        </span>
      </div>

      <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center">
            Nenhum projeto encontrado.
          </p>
        ) : (
          projects.map((project) => (
            <CardProject key={project.id} {...project} />
          ))
        )}
      </div>

      <div className="mt-10">
        <Button
          asChild
          className="bg-principal hover:bg-principal/80 text-white"
        >
          <Link
            href="https://github.com/MiguelASFerreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Plus className="mr-2 h-4 w-4" />
            Projetos
          </Link>
        </Button>
      </div>
    </div>
  );
}
