import { Projects } from "./components/projects";

export default function Projetos() {
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
        <Projects />
      </div>
    </div>
  );
}
