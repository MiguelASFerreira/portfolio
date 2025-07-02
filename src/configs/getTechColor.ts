export const getTechColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    react: "bg-sky-700/20 text-sky-400 border-sky-700/30",
    "react-native": "bg-cyan-800/20 text-cyan-300 border-cyan-600/30",
    typescript: "bg-blue-700/20 text-blue-400 border-blue-700/30",
    javascript: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    nodejs: "bg-green-700/20 text-green-400 border-green-700/30",
    expressjs: "bg-neutral-700/20 text-neutral-300 border-neutral-500/30",
    mongodb: "bg-emerald-700/20 text-emerald-300 border-emerald-700/30",
    postgresql: "bg-indigo-700/20 text-indigo-300 border-indigo-700/30",
    mysql: "bg-orange-700/20 text-orange-300 border-orange-700/30",
    expo: "bg-purple-800/20 text-purple-300 border-purple-700/30",
    "expo-font": "bg-[#55B467]/20 text-[#55B467] border-[#55B467]/30",
    vite: "bg-violet-700/20 text-violet-300 border-violet-700/30",
    tailwindcss: "bg-teal-700/20 text-teal-300 border-teal-700/30",
    nestjs: "bg-red-600/20 text-red-300 border-red-600/30",
    zod: "bg-lime-700/20 text-lime-300 border-lime-700/30",
    prisma: "bg-[#1F244C]/20 text-[#00D8C8] border-[#00D8C8]/30",
    "prisma-orm": "bg-[#1F244C]/20 text-[#00D8C8] border-[#00D8C8]/30",
    git: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    github: "bg-gray-800/20 text-white border-gray-600/30",
    "api rest": "bg-zinc-600/20 text-zinc-300 border-zinc-600/30",
    "styled-components": "bg-pink-700/20 text-pink-300 border-pink-700/30",
    "shadcn-ui": "bg-rose-700/20 text-rose-300 border-rose-700/30",
    vitest:
      "bg-gradient-to-r from-[#E5FF52] to-[#42D300] bg-clip-text text-transparent border-lime-500/30",
    bun: "bg-[#F472B6]/20 text-[#F472B6] border-[#F472B6]/30",
    neondb:
      "bg-transparent bg-gradient-to-r from-[#00D0C7] to-[#80FF72] bg-clip-text text-transparent border-[#00D0C7]/30",
    eslint: "bg-[#341BAB]/20 text-slate-400 border-[#341BAB]/30",
    drizzle: "bg-[#C5F74F]/20 text-[#C5F74F] border-[#C5F74F]/30",
    "drizzle-orm": "bg-[#C5F74F]/20 text-[#C5F74F] border-[#C5F74F]/30",
    docker: "bg-[#1D63ED]/20 text-neutral-300 border-[#1D63ED]/30",
    "docker-compose": "bg-[#1D63ED]/20 text-neutral-300 border-[#1D63ED]/30",
    axios: "bg-[#6A3EE7]/20 text-[#6A3EE7] border-[#6A3EE7]/30",
    "react-router-dom": "bg-[#E50000]/20 text-[#F9F9F9] border-[#E50000]/30",
    husky: "bg-neutral-800/20 text-neutral-300 border-neutral-700/30", 
    "ddd-architecture": "bg-fuchsia-700/20 text-fuchsia-300 border-fuchsia-700/30", 
    nextjs: "bg-neutral-900/20 text-[#004DFF] border-[#004DFF]/30",
    python: "bg-transparent bg-gradient-to-r from-[#3D7AAB] to-[#FFE05E] bg-clip-text text-transparent  border-yellow-500/30",
    python3: "bg-transparent bg-gradient-to-r from-[#3D7AAB] to-[#FFE05E] bg-clip-text text-transparent  border-yellow-500/30",
    venv: "bg-green-700/20 text-green-300 border-green-700/30",
  };

  return (
    colors[tech.toLowerCase()] ||
    "bg-gray-700/20 text-gray-300 border-gray-600/30"
  );
};
