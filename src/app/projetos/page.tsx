import { ArrowUpRight, FolderOpen } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getGitHubProjects } from "@/lib/github";

import { CardFeaturedProject } from "./_components/card-featured-project";
import { CardProject } from "./_components/card-project";

export const metadata = {
  title: "Portfólio - Projetos",
  description:
    "Confira meus projetos desenvolvidos aplicando tecnologias modernas",
};

export default async function Projects() {
  const github = await getGitHubProjects();
  const hasProjects =
    github.projects.length > 0 || github.highlights.length > 0;

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 md:px-8 xl:px-12">
      <header className="space-y-3">
        <p className="text-principal text-sm font-semibold tracking-[0.2em] uppercase">
          Portfolio de Código
        </p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Projetos que transformam ideia em produto
        </h1>
        <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
          Uma seleção de trabalhos com foco em experiência de usuário, qualidade
          de código e entrega de valor. Explore os destaques ou navegue pela
          lista completa.
        </p>
      </header>

      {github.highlights.length > 0 && (
        <div className="w-full">
          <h2 className="text-principal mb-6 text-xl font-semibold sm:text-2xl">
            Projetos em Destaque
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {github.highlights.map((project) => (
              <CardFeaturedProject key={project.id} {...project} />
            ))}
          </div>
        </div>
      )}

      <div className="w-full">
        <h2 className="text-principal mb-6 text-xl font-semibold sm:text-2xl">
          Todos os Projetos
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {github.projects.length === 0 ? (
            <div className="bg-navbar/70 col-span-full flex min-h-52 flex-col items-center justify-center rounded-xl border border-white/10 px-6 text-center">
              <FolderOpen className="text-principal mb-3 h-10 w-10" />
              <h3 className="text-lg font-semibold text-white">
                Nenhum projeto listado no momento
              </h3>
              <p className="mt-2 max-w-md text-sm text-zinc-300">
                Veja o perfil no GitHub para acompanhar os próximos repositórios
                e atualizações.
              </p>
            </div>
          ) : (
            github.projects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))
          )}
        </div>
      </div>

      {hasProjects && (
        <div className="flex justify-center pt-2 pb-4">
          <Button
            asChild
            className="bg-principal hover:bg-principal/80 h-11 rounded-lg px-6 text-white"
          >
            <Link
              href="https://github.com/MiguelASFerreira?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos no GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}

      {!hasProjects && (
        <Button
          asChild
          className="bg-principal hover:bg-principal/80 mx-auto h-11 rounded-lg px-6 text-white"
        >
          <Link
            href="https://github.com/MiguelASFerreira?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </section>
  );
}
