<script lang="ts">
  import {
    deckTypesStore,
    selectedDeckIdStore,
  } from "../services/deck.service";
</script>

<main>
  <select bind:value={$selectedDeckIdStore}>
    {#each $deckTypesStore as deckType}
      <option value={deckType.id}>{deckType.name}</option>
    {/each}
  </select>
</main>

<style>
</style>
