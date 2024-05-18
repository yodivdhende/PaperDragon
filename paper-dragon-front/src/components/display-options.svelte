<script lang="ts">
  import DisplaySelector from "./display-selector.svelte";
  import CardTemplateSelector from "./card-type-selector.svelte";
  import DeckSelector from "./deck-selector.svelte";
  import CardSideSelector from "./card-side-selector.svelte";
  import {
    exportAll,
    exportCurrentDeck,
  } from "../services/export-to-image.service";
  import {
    DISPLAYTYPES,
    currentDisplayStore,
  } from "../services/display-type-selector.service";

  $: selectedDisplay = $currentDisplayStore;
</script>

<main>
  <DisplaySelector />
  <CardSideSelector />
  {#if selectedDisplay === DISPLAYTYPES.template}
    <CardTemplateSelector />
  {/if}
  {#if selectedDisplay === DISPLAYTYPES.deck}
    <DeckSelector />
    <button on:click={exportCurrentDeck}> Export current</button>
  {/if}
  {#if selectedDisplay === DISPLAYTYPES.allDecks}
    <button on:click={exportAll}> Export All</button>
  {/if}
</main>

<style>
  main {
    max-width: 200px;
  }
</style>
