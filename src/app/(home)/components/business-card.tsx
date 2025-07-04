import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export function BusinessCard() {
  return (
    <Card className="bg-navbar">
      <CardContent>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/106342952?v=4"
              alt="Miguel Antonio"
              width={300}
              height={300}
              className="rounded-[40px]"
              quality={100}
            />
            <div className="text-center">
              <h1 className="font-lobster text-[28px] leading-tight text-white md:text-[36px] lg:text-[40px]">
                Miguel Antonio Santos Ferreira!
              </h1>
              <p className="font-lobster typing-animation mt-2 max-w-max text-xl text-white md:text-2xl lg:text-3xl">
                Desenvolvedor FullStack
              </p>
            </div>
          </div>
          <div className="flex flex-col py-3">
            <h1 className="font-lobster text-lg text-white">
              Sou Miguel Antonio, desenvolvedor Full Stack, com 21 anos de
              idade, formado em Análise e Desenvolvimento de Sistemas e com
              pós-graduação em Desenvolvimento Full Stack. Sou apaixonado por
              tecnologia. Desde o início da minha trajetória venho me dedicando
              ao desenvolvimento de soluções completas, tanto no front quanto no
              back-end, além de aplicações mobile. Estou em constante evolução,
              buscando aprofundar meus conhecimentos e ampliar minhas
              habilidades para entregar resultados cada vez melhores. Embora
              esteja apenas começando, tenho metas bem definidas e um forte
              desejo de crescimento profissional. Este portfólio reúne um pouco
              da minha história, experiências e objetivos que me impulsionam a
              seguir em frente com dedicação e propósito.
            </h1>
            <div className="border-muted-foreground my-4 w-full border" />
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-lobster text-lg text-white">Email:</h2>
                <p className="text-white">migant1306@gmail.com</p>
              </div>
              <div>
                <h2 className="font-lobster text-lg text-white">Linkedin:</h2>
                <Link
                  className="hover:text-principal text-white hover:underline"
                  href="https://www.linkedin.com/in/miguel-antonio-624ba1234/"
                  target="_blank"
                >
                  Linkedin - Miguel Antonio
                </Link>
              </div>
              <div>
                <h2 className="font-lobster text-lg text-white">Contato:</h2>
                <p className="text-white">+55 (44) 99722-1048</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
