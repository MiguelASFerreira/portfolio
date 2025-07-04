export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  location?: string;
  modality: "Online" | "Presencial";
  description: string;
  type: string;
  status: "Concluído" | "Em Andamento";
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    title:
      "Faculdade de Tecnologia Análise e Desenvolvimento de Sistemas - (TADS)",
    institution: "Grupo Integrado",
    period: "2022 - 2024",
    location: "Campo Mourão, PR",
    modality: "Presencial",
    description:
      "Curso focado em programação, banco de dados, engenharia de software e metodologias ágeis, com uma formação ampla que me permitiu explorar diferentes áreas da tecnologia.",
    type: "Graduação",
    status: "Concluído",
    highlights: [
      "Desenvolvimento de Software",
      "Banco de Dados",
      "Front-end",
      "Back-end",
      "Mobile",
      "Metodologias Ágeis",
      "DevOps",
      "Programação Orientada a Objetos",
      "Linguagens de Programação",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Java",
    ],
  },
  {
    title: "MBA - MBA em Desenvolvimento Full Stack",
    institution: "Rocketseat e Faculdade Sirius",
    period: "2024 - 2025",
    modality: "Online",
    description:
      "MBA focado em desenvolvimento Full Stack, dividido em cinco módulos: Web, Front-end, Back-end, Mobile e Soft Skills. Ao longo do curso, aprofundei conhecimentos técnicos e práticos em desenvolvimento moderno. Além disso, desenvolvi habilidades interpessoais essenciais para atuação em times de alta performance.",
    type: "Pós-Graduação",
    status: "Concluído",
    highlights: [
      "Desenvolvimento Web",
      "Desenvolvimento Front-end",
      "Desenvolvimento Back-end",
      "Desenvolvimento Mobile",
      "Soft Skills",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Testes Manuais",
      "Testes Automatizados",
      "Ci/CD",
      "Docker",
      "Git",
      "Next.js",
      "React Native",
      "Expo",
      "Apple Store",
      "Google Play",
      "Tailwind CSS",
      "Node.js",
      "Banco de Dados",
    ],
  },
];
