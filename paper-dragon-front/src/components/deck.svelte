<script lang="ts">
  import { getDeck, selectedDeckIdStore } from "../services/deck.service";
  import Card from "./card-templates/card.svelte";
  import DeckSelector from "./deck-selector.svelte";

  let deck = getDeck($selectedDeckIdStore);
</script>

<main>
  <div class="header">
    <DeckSelector />
  </div>
  {#each $deck as card}
    <Card {card}></Card>
  {/each}
</main>

<style>
  main {
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-area:
      " header header header "
      " . . .";
  }

  .header {
    grid-area: header;
  }
</style>
