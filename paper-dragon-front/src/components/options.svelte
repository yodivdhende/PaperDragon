<script lang="ts">
  import CardSideSelector from "./card-side-selector.svelte";
  import DeckSelector from "./deck-selector.svelte";
  import DisplaySelector from "./display-selector.svelte";
  import CardTemplateSelector from "./card-type-selector.svelte";
  import {
    exportAll,
    exportCurrentDeck,
  } from "../services/export-to-image.service";
  import {
    DISPLAYTYPES,
    currentDisplayStore,
  } from "../services/display-type-selector.service";

  $: currentDisplay = $currentDisplayStore;
</script>

<main>
  <DisplaySelector />
  <CardSideSelector />
  {#if currentDisplay === DISPLAYTYPES.template}
    <CardTemplateSelector />
  {/if}
  {#if currentDisplay === DISPLAYTYPES.deck}
    <DeckSelector />
    <button on:click={exportCurrentDeck}> Export current</button>
  {/if}
  {#if currentDisplay === DISPLAYTYPES.allDecks}
    <button on:click={exportAll}> Export All</button>
  {/if}
</main>

<style>
  main {
    max-width: 200px;
  }
</style>
