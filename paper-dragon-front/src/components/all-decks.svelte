<script lang="ts">
  import { getDeckElement } from "../services/card-generator";
  import {
    selectedCardSideStore,
    type CardSide,
  } from "../services/card-selector.service";
  import { fetchDeck, fetchDeckTypes } from "../services/deck.service";

  let mainElement: HTMLElement;
  $: renderDecks(mainElement, $selectedCardSideStore);

  async function renderDecks(container: HTMLElement, cardSide: CardSide) {
    if (container == null) return;
    const deckTypes = await fetchDeckTypes();
    container.innerHTML = "";
    for (let deckType of deckTypes) {
      const deck = await fetchDeck(deckType.id);
      if (deck == null) continue;
      const deckElement = getDeckElement(deck, cardSide);
      container.appendChild(deckElement);
    }
  }
</script>

<main bind:this={mainElement}></main>

<style>
  main {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
</style>
