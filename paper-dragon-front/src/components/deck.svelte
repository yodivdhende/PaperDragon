<script lang="ts">
  import type { CardData } from "./card-templates/card-templates.type";
  import Card from "./card-templates/card.svelte";

  let deck: CardData[] = [];
</script>

<main>
  {#each deck as card}
    <Card {card}></Card>
  {/each}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
