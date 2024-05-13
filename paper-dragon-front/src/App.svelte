<script lang="ts">
  import CardTemplateSelector from "./components/card-type-selector.svelte";
  import DisplaySelector from "./components/display-selector.svelte";
  import Display from "./components/display.svelte";
  import { currentDisplayStore } from "./services/display-type-selector.service";
  import DeckSelector from "./components/deck-selector.svelte";
  import CardSideSelector from "./components/card-side-selector.svelte";
  import {
    exportAll,
    exportCurrentDeck,
  } from "./services/export-to-image.service";
</script>

<main>
  <Display displayType={$currentDisplayStore} />
  <div class="options">
    <DisplaySelector />
    <CardTemplateSelector />
    <CardSideSelector />
    <DeckSelector />
    <button on:click={exportCurrentDeck}> Export current</button>
    <button on:click={exportAll}> Export All</button>
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .options {
    max-width: 200px;
  }
</style>
