<script lang="ts">
  import { type Deck } from "../services/deck.service";
  import Card from "./cards/card.svelte";

  export let deck: Deck;
  export let scale = 1;
</script>

{#if deck}
  <div class="deck" id={deck.id}>
    {#each deck.cards as card}
      <Card {card} {scale}></Card>
    {/each}
  </div>
{/if}

<style>
  .deck {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
