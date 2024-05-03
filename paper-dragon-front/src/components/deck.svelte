<script lang="ts">
  import { getDeck, selectedDeckIdStore } from "../services/deck.service";
  import Card from "./cards/card.svelte";

  $: fetchDeck = getDeck($selectedDeckIdStore);
  let scale = 1;
</script>

<main>
  {#await fetchDeck}
    <p>...waiting</p>
  {:then deck}
    {#if deck !== undefined}
      <div class="view">
        <div class="deck">
          {#each deck as card}
            <Card {card} {scale}></Card>
          {/each}
        </div>
      </div>
    {/if}
  {/await}
</main>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
  }
  .deck {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .view {
    overflow: auto;
  }
</style>
