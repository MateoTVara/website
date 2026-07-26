import type { TechnologyCategory } from "@/types/TechnologyCategory";

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
      { name: "angular", icon: "fa7-brands:angular" },
      { name: "astro", icon: "lineicons:astro" },
      { name: "svelte", icon: "fa7-brands:svelte" },
    ],
  },
  {
    name: "backend",
    technologies: [
      { name: "express", icon: "lineicons:expressjs" },
      { name: "prisma", icon: "file-icons:prisma" },
    ],
  },
  {
    name: "herramientas",
    technologies: [
      { name: "git", icon: "lineicons:git" },
      { name: "linux", icon: "fa7-brands:linux" },
      { name: "nix", icon: "file-icons:nix" },
    ],
  },
];
