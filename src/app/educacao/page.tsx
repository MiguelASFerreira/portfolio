import { education } from "@/configs/education";

import { AcademicCard } from "./components/academic-card";

export default function Education() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-[80px] py-10">
      <div className="text-center">
        <h1 className="text-principal text-2xl font-bold">
          Formação Acadêmica
        </h1>
      </div>
      <div>
        {education.map((entry) => (
          <AcademicCard key={entry.title} education={entry} />
        ))}
      </div>
    </section>
  );
}
