<script lang="ts">
  import { fetchDeck, fetchDeckTypes } from "../services/deck.service";
  import DeckView from "./deck-view.svelte";
  import Deck from "./deck.svelte";

  async function getAllDecks() {
    const deckTypes = await fetchDeckTypes();
    return (
      await Promise.allSettled(
        deckTypes.map((deckType) => fetchDeck(deckType.id))
      )
    ).map((request) => {
      if (request.status !== "fulfilled") return;
      if (request.value == null) return;
      return request.value;
    });
  }
</script>

<DeckView>
  {#await getAllDecks()}
    ... fetching all decks
  {:then decks}
    {#each decks as deck}
      {#if deck}
        <Deck {deck} />
      {/if}
    {/each}
  {/await}
</DeckView>

<style>
</style>
