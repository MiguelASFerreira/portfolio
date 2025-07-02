import { skills } from "@/configs/skills";

import { CardSkills } from "./components/card-skills";

export const metadata = {
  title: "Portfólio - Habilidades",
  description: "Conheça mais sobre minhas habilidades",
};

export default function Habilidades() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-[80px] py-10">
      <div className="text-center">
        <h1 className="text-principal text-2xl font-bold">Habilidades</h1>
        <span className="text-muted-foreground text-sm">
          Tecnologias e ferramentas com as quais trabalho e continuo me
          aprimorando
        </span>
      </div>

      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <CardSkills key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
