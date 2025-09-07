import { LinkedinIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { LinkAction } from "./_components/link-action";

export const metadata = {
  title: "Portfólio - Miguel Antonio",
  description: "Meu portfólio pessoal",
};

export default function Home() {
  return (
    <section className="my-10 flex flex-col space-y-6 px-4">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-10">
        <div className="w-full max-w-3xl space-y-4 text-center md:text-left">
          <Badge className="bg-principal">✨ Desenvolvedor FullStack</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Miguel Antonio
            <span className="text-principal block">Santos Ferreira</span>
          </h1>
          <p className="text-base text-white sm:text-lg md:text-justify">
            Sou Miguel Antonio, desenvolvedor Full Stack, com 21 anos de idade,
            formado em Análise e Desenvolvimento de Sistemas e com pós-graduação
            em Desenvolvimento Full Stack. Sou apaixonado por tecnologia. Desde
            o início da minha trajetória venho me dedicando ao desenvolvimento
            de soluções completas, tanto no front quanto no back-end, além de
            aplicações mobile. Estou em constante evolução, buscando aprofundar
            meus conhecimentos e ampliar minhas habilidades para entregar
            resultados cada vez melhores. Embora esteja apenas começando, tenho
            metas bem definidas e um forte desejo de crescimento profissional.
            Este portfólio reúne um pouco da minha história, experiências e
            objetivos que me impulsionam a seguir em frente com dedicação e
            propósito.
          </p>
        </div>

        <div className="relative h-64 w-64 md:h-[300px] md:w-[300px]">
          <Image
            src={"https://avatars.githubusercontent.com/u/106342952?v=4"}
            alt="Foto de perfil"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
        <LinkAction
          href="mailto:test@example.com"
          icon={<Mail className="h-4 w-4 text-white" />}
          text="migant1306@gmail.com"
        />
        <LinkAction
          href="tel:+5544997221048"
          icon={<Phone className="h-4 w-4 text-white" />}
          text="+55 (44) 99722-1048"
        />
        <LinkAction
          href="https://www.linkedin.com/in/miguel-antonio-624ba1234/"
          icon={<LinkedinIcon className="h-4 w-4 text-white" />}
          text="Miguel Antonio"
        />
      </div>
    </section>
  );
}
