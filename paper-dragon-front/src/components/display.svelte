<script lang="ts">
  import {
    DISPLAYTYPES,
    type DisplayType,
  } from "../services/display-type-selector.service";
  import { selectedDefaulCardTemplateStore } from "../services/card-selector.service";
  import Card from "./cards/card.svelte";
  import Deck from "./deck.svelte";
  import { fetchDeck, selectedDeckIdStore } from "../services/deck.service";
  import AllDecks from "./all-decks.svelte";
  import DeckView from "./deck-view.svelte";

  export let displayType: DisplayType;
  $: deckPromise = getDeck(displayType, $selectedDeckIdStore);

  async function getDeck(displayType: DisplayType, selectedDeckId: string) {
    if (displayType === DISPLAYTYPES.deck) {
      return await fetchDeck(selectedDeckId);
    }
    return;
  }
</script>

<main>
  {#if displayType === DISPLAYTYPES.template}
    <div>
      <Card card={$selectedDefaulCardTemplateStore}></Card>
    </div>
  {/if}
  {#if displayType === DISPLAYTYPES.deck}
    {#await deckPromise}
      ...Waiting
    {:then deck}
      {#if deck !== undefined}
        <DeckView>
          <Deck {deck} />
        </DeckView>
      {/if}
    {/await}
  {/if}
  {#if displayType === DISPLAYTYPES.allDecks}
    <AllDecks />
  {/if}
</main>

<style>
  main {
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
  }
</style>
