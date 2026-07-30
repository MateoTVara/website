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

<button class="border border-l-2 px-3 py-2" onclick={onToggle}>
  <div class="flex flex-col sm:flex-row items-start justify-between">
    <h2 class="text-lg">{experience.title}</h2>
    <span class="text-sm font-light">{experience.period}</span>
  </div>
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-sm font-light text-start">{experience.company}</h3>
    <Icon
      icon="fa7-solid:chevron-up"
      class={["transition-transform duration-300", isOpen && "rotate-180"]}
    />
  </div>
  <ul
    class={[
      "list-inside overflow-hidden transition-all duration-300",
      isOpen ? "max-h-96" : "max-h-0",
    ]}
  >
    {#each experience.description as description}
      <li class="before:mr-2 before:content-['▷'] text-start">{description}</li>
    {/each}
  </ul>
</button>
