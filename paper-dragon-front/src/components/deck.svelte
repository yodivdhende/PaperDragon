<script lang="ts">
  import { getDeckElement } from "../services/card-generator";
  import { selectedCardSideStore } from "../services/card-selector.service";
  import { type Deck } from "../services/deck.service";

  export let deck: Deck;
  let viewElement: HTMLElement;
  $: renderElement(viewElement, getDeckElement(deck, $selectedCardSideStore));

  function renderElement(
    container: HTMLElement | undefined,
    deckElement: HTMLElement | undefined
  ) {
    if (container == null) return;
    if (deckElement == null) return;
    container.innerHTML = "";
    container.appendChild(deckElement);
  }
</script>

<main>
  <div class="view" bind:this={viewElement}></div>
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
  .view {
    overflow: auto;
  }
</style>
