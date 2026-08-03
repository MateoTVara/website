import type { TechnologyCategory } from "@/lib/types/TechnologyCategory";

export const techCategories: TechnologyCategory[] = [
  {
    name: "lenguajes",
    technologies: [
      { name: "typescript", icon: "fa7-brands:typescript", url: "https://www.typescriptlang.org/" },
      { name: "javascript", icon: "fa7-brands:js", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
      { name: "python", icon: "fa7-brands:python", url: "https://www.python.org/" },
      { name: "nix", icon: "file-icons:nix", url: "https://nixos.org/" },
    ],
  },
  {
    name: "frontend",
    technologies: [
      { name: "react", icon: "fa7-brands:react", url: "https://react.dev/" },
      { name: "tailwind", icon: "fa7-brands:tailwind-css", url: "https://tailwindcss.com/" },
      { name: "astro", icon: "lineicons:astro", url: "https://astro.build/" },
      { name: "angular", icon: "fa7-brands:angular", url: "https://angular.dev/" },
      { name: "svelte", icon: "fa7-brands:svelte", url: "https://svelte.dev/" },
    ],
  },
  {
    name: "backend",
    technologies: [
      { name: "node-js", icon: "fa7-brands:node-js", url: "https://nodejs.org/" },
      { name: "express", icon: "lineicons:expressjs", url: "https://expressjs.com/" },
      { name: "prisma", icon: "file-icons:prisma", url: "https://www.prisma.io/" },
      { name: "postgresql", icon: "fa7-brands:postgresql", url: "https://www.postgresql.org/" },
      { name: "sqlite", icon: "file-icons:sqlite", url: "https://www.sqlite.org/" },
    ],
  },
  {
    name: "herramientas",
    technologies: [
      { name: "git", icon: "lineicons:git", url: "https://git-scm.com/" },
      { name: "gnu/linux", icon: "fa7-brands:linux", url: "https://www.linux.org/" },
      { name: "nix", icon: "file-icons:nix", url: "https://nixos.org/" },
      { name: "tmux", icon: "file-icons:tmux", url: "https://tmux.github.io/" },
    ],
  },
];
