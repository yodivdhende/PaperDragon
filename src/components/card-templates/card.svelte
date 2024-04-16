<script lang="ts">
  import AttackCard from "./attack-card.svelte";
  import { CardTemplates, type CardData } from "./card-templates.type";
  export let card = {
    template: CardTemplates.attack,
  };
</script>

<main>
  {#if card.template === CardTemplates.attack}
    <AttackCard></AttackCard>
  {/if}
</main>

<style>
  main {
    height: 100%;
  }
</style>
