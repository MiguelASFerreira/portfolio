export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  logo?: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: "Viptech Smart Solutions - Estágio",
    description:
      "Atuei como estagiário de desenvolvimento Full Stack, com carga de 30 horas semanais, participando ativamente de projetos internos e externos. Contribuí para o desenvolvimento e manutenção de funcionalidades, identificação e correção de bugs, além da implementação de soluções alinhadas a requisitos técnicos e de negócios. Trabalhei com múltiplas linguagens e ambientes, focando em módulos escaláveis e eficientes, sempre em colaboração com times multidisciplinares. Ao longo do estágio, aprimorei habilidades em análise de sistemas, boas práticas de programação e resolução de problemas em ambientes ágeis.",
    startDate: "Fev. 2025",
    endDate: "Abr. 2025",
    isActive: false,
    logo: "/images/logo-viptech.svg",
    companyUrl: "https://www.viptech.com.br/",
  },
  {
    title: "Grupo Integrado - Estágio",
    description:
      "Atuei como estagiário de desenvolvimento Full Stack, com carga de 30 horas semanais, participando ativamente de projetos internos e externos. Contribuí para o desenvolvimento e manutenção de funcionalidades, identificação e correção de bugs, além da implementação de soluções alinhadas a requisitos técnicos e de negócios. Trabalhei com múltiplas linguagens e ambientes, focando em módulos escaláveis e eficientes, sempre em colaboração com times multidisciplinares. Ao longo do estágio, aprimorei habilidades em análise de sistemas, boas práticas de programação e resolução de problemas em ambientes ágeis.",
    startDate: "Out. 2024",
    endDate: "Fev. 2025",
    isActive: false,
    logo: "/images/logo-integrado.svg",
    companyUrl: 'https://www.grupointegrado.br/',
  },
  {
    title: "Grupo Integrado - Estágio",
    description:
      "Atuei como estagiário de desenvolvimento Full Stack, com carga de 30 horas semanais, participando ativamente de projetos internos e externos. Contribuí para o desenvolvimento e manutenção de funcionalidades, identificação e correção de bugs, além da implementação de soluções alinhadas a requisitos técnicos e de negócios. Trabalhei com múltiplas linguagens e ambientes, focando em módulos escaláveis e eficientes, sempre em colaboração com times multidisciplinares. Ao longo do estágio, aprimorei habilidades em análise de sistemas, boas práticas de programação e resolução de problemas em ambientes ágeis.",
    startDate: "Set. 2023",
    endDate: "Set. 2024",
    isActive: false,
    logo: "/images/logo-integrado.svg",
    companyUrl: 'https://www.grupointegrado.br/',
  },
];
