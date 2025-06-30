import { Projects } from "./components/projects";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-[80px] py-10">
      <h1 className="text-principal text-center text-2xl font-bold">Projetos</h1>

      <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Projects />
      </div>
    </div>
  );
}
