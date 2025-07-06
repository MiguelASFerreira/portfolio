import { ProfileSection } from "./_components/profile-section";
import { TimelineExperience } from "./_components/timeline-experience";

export const metadata = {
  title: "Portfólio - Sobre Mim",
  description: "Conheça mais sobre minha jornada",
};

export default function AboutMe() {
  return (
    <div className="flex flex-col px-[87px]">
      <ProfileSection
        title="Sobre mim"
        subtitle="quem sou"
        description={`Meu nome é Miguel Antonio Santos Ferreira, tenho 21 anos e sou desenvolvedor Full Stack com cerca de 2 anos de experiência.
Sou formado em Análise e Desenvolvimento de Sistemas e sigo me especializando em desenvolvimento Full Stack.

Estou apenas no início de minha jornada, e estou determinado a fazer meu nome no mercado de trabalho e na área Full Stack.`}
        imageUrl="/images/quem-sou.svg"
        imageAlt="Pessoa programando"
        imageOnLeft={false}
      />

      <ProfileSection
        title="Sobre mim"
        subtitle="o que faço"
        description={`Atualmente foco meus estudos e projetos no desenvolvimento Front-end, Back-end e Mobile, onde já possuo uma base sólida de conhecimentos.
Minha principal prioridade tem sido o desenvolvimento Front-end, seguido pelo Back-end e, posteriormente, pela área Mobile. Essa trajetória me proporcionou experiência prática com tecnologias como React, React Native, TypeScript, entre outras que fazem parte desse ecossistema.`}
        imageUrl="/images/o-que-faco.svg"
        imageAlt="Pessoa com headset programando"
        imageOnLeft={true}
      />

      <ProfileSection
        title="Sobre mim"
        subtitle="o que quero fazer"
        description={`Embora hoje meu foco seja o desenvolvimento Full Stack, tenho metas bem definidas para minhas carreiras.

• A curto prazo: Aprofundar meus conhecimentos nas tecnologias que já domino e expandir minhas habilidades nas áreas de DevOps e Design.
• A médio prazo: Conquistar uma posição estável, com um bom ambiente de trabalho e uma remuneração justa, que me permita continuar crescendo profissionalmente.
• A longo prazo: Atuar como desenvolvedor sênior em uma empresa internacional, seja no modelo remoto ou presencial, contribuindo em projetos de alto impacto.`}
        imageUrl="/images/o-que-quero-fazer.svg"
        imageAlt="Pessoa analisando monitores"
        imageOnLeft={false}
      />

      <section className="mt-[80px] flex flex-col items-center justify-center">
        <h1 className="text-principal text-center text-[45px] font-bold">
          Linha do Tempo
        </h1>

        <div className="mt-30">
          <TimelineExperience />
        </div>
      </section>
    </div>
  );
}
