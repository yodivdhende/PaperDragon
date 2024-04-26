<script lang="ts">
  import { getDeck, selectedDeckIdStore } from "../services/deck.service";
  import Card from "./card-templates/card.svelte";
  import DeckSelector from "./deck-selector.svelte";

  $: fetchDeck = getDeck($selectedDeckIdStore);
  let scale = 0.5;
</script>

<main>
  <div class="header">
    <DeckSelector />
  </div>
  {#await fetchDeck}
    <p>...waiting</p>
  {:then deck}
    {#if deck !== undefined}
      <div class="deck">
        {#each deck as card}
          <Card {card} {scale}></Card>
        {/each}
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
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      " header header header "
      " . . .";
    overflow-y: auto;
  }

  .header {
    grid-area: header;
  }
</style>
