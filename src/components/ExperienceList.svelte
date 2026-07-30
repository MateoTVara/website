<script lang="ts">
  import { experiences } from "@/lib/consts/experiences";
  import ExperienceCard from "./ExperienceCard.svelte";

  let openIndex: number | null = $state(null);

  function toggleOpen(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<div class="mb-8 flex flex-col gap-3 sm:gap-4">
  {#each experiences as experience, index}
    <ExperienceCard
      {experience}
      isOpen={openIndex === index}
      onToggle={() => toggleOpen(index)}
    />
  {/each}
</div>
