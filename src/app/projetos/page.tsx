import { Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getGitHubProjects } from "@/lib/github";

import { CardProject } from "./_components/card-project";
import { CardFeaturedProject } from "./_components/card-featured-project";

export const metadata = {
  title: "Portfólio - Projetos",
  description:
    "Confira meus projetos desenvolvidos aplicando tecnologias modernas",
};

export default async function Projects() {
  const github = await getGitHubProjects();

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-[80px] py-10">
      {github.highlights.length > 0 && (
        <div className="mt-10 w-full">
          <h2 className="text-principal mb-6 text-center text-xl font-semibold">
            Projetos em Destaque
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {github.highlights.map((project) => (
              <CardFeaturedProject key={project.id} {...project} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 w-full">
        <h2 className="text-principal mb-6 text-center text-xl font-semibold">
          Todos os Projetos
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {github.projects.length === 0 ? (
            <p className="text-muted-foreground col-span-full text-center">
              Nenhum projeto encontrado.
            </p>
          ) : (
            github.projects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))
          )}
        </div>
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
    </section>
  );
}
