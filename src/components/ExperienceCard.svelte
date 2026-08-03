<script lang="ts">
  import type { Experience } from "@/lib/types/Experience";
  import Icon from "@iconify/svelte";

  type Props = {
    experience: Experience;
    isOpen: boolean;
    onToggle: () => void;
  };

  let { experience, isOpen, onToggle }: Props = $props();
</script>

<button
  class={[
    "border border-fg-lighter/25 px-3 py-2 transition-colors hover:border-special group cursor-pointer",
    isOpen && "border-special",
  ]}
  onclick={onToggle}
>
  <div class="flex flex-col sm:flex-row items-start justify-between">
    <h2 class={["text-lg font-medium group-hover:text-special", isOpen && "text-special"]}>
      {experience.title}
    </h2>
    <span class="text-sm font-light">{experience.period}</span>
  </div>
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-sm text-fg-lighter/75 font-light text-start">
      {experience.company}
    </h3>
    <Icon
      icon="fa7-solid:chevron-up"
      class={[
        "transition-transform duration-500 group-hover:text-special",
        isOpen ? "rotate-180" : "group-hover:rotate-90",
      ]}
    />
  </div>
  <ul
    class={[
      "list-inside overflow-hidden transition-all duration-500",
      isOpen ? "max-h-76" : "max-h-0",
    ]}
  >
    {#each experience.description as description}
      <li class="before:mr-2 before:content-['▷'] text-start cursor-default">{description}</li>
    {/each}
  </ul>
</button>
