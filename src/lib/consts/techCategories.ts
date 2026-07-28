import type { TechnologyCategory } from "@/lib/types/TechnologyCategory";

export const techCategories: TechnologyCategory[] = [
  {
    name: "lenguajes",
    technologies: [
      { name: "typescript", icon: "fa7-brands:typescript" },
      { name: "javascript", icon: "fa7-brands:js" },
      { name: "python", icon: "fa7-brands:python" },
      { name: "nix", icon: "file-icons:nix" },
    ],
  },
  {
    name: "frontend",
    technologies: [
      { name: "react", icon: "fa7-brands:react" },
      { name: "tailwind", icon: "fa7-brands:tailwind-css" },
      { name: "astro", icon: "lineicons:astro" },
      { name: "angular", icon: "fa7-brands:angular" },
      { name: "svelte", icon: "fa7-brands:svelte" },
    ],
  },
  {
    name: "backend",
    technologies: [
      { name: "node-js", icon: "fa7-brands:node-js" },
      { name: "express", icon: "lineicons:expressjs" },
      { name: "prisma", icon: "file-icons:prisma" },
      { name: "postgresql", icon: "fa7-brands:postgresql" },
      { name: "sqlite", icon: "file-icons:sqlite" },
    ],
  },
  {
    name: "herramientas",
    technologies: [
      { name: "git", icon: "lineicons:git" },
      { name: "linux", icon: "fa7-brands:linux" },
      { name: "nix", icon: "file-icons:nix" },
      { name: "tmux", icon: "file-icons:tmux" },
    ],
  },
];
