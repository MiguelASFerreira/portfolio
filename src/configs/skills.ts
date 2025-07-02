import {
  Code,
  Database,
  GitBranch,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import { ComponentType } from "react";

type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  skills: Skill[];
};

export const skills: SkillGroup[] = [
  {
    title: "Front-end",
    icon: Code,
    description: "Desenvolvimento de interfaces modernas e responsivas",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "PHP", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    description: "Desenvolvimento de aplicativos cross-platform",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Dart",  level: 70 },
    ],
  },
  {
    title: "Back-end",
    icon: Server,
    description: "APIs e serviços robustos",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Nest.Js", level: 90 },
      { name: "Express", level: 75 },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    description: "Modelagem e gerenciamento de dados",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    description: "UI/UX e prototipagem",
    skills: [
      { name: "Figma", level: 60 },
      { name: "UI/UX Design", level: 50 },
      { name: "Responsive Design", level: 50 },
    ],
  },
  {
    title: "Ferramentas",
    icon: GitBranch,
    description: "Versionamento e deploy",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Vercel", level: 75 },
    ],
  },
];
