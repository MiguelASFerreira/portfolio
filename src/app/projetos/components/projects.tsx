"use client";

import { useEffect, useState } from "react";

import { CardPortfolioSkeleton } from "@/components/card-portfolio-skeleton";
import { api } from "@/lib/axios";

import { CardProject, ProjectParams } from "./card-project";

export function Projects() {
  const [projects, setProjects] = useState<ProjectParams[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Erro ao buscar projetos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return (
      <>
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
        <CardPortfolioSkeleton />
      </>
    );

  if (projects.length === 0)
    return (
      <p className="text-muted-foreground col-span-full text-center">
        Nenhum projeto encontrado.
      </p>
    );

  return (
    <>
      {projects.map((project) => (
        <CardProject key={project.id} {...project} />
      ))}
    </>
  );
}
