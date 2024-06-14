<script lang="ts">
  import {
    fetchDeckTypes,
    selectedDeckIdStore,
  } from "../services/deck.service";
</script>

<main>
  {#await fetchDeckTypes()}
    <p>... waiting for deck types</p>
  {:then deckTypes}
    <select bind:value={$selectedDeckIdStore}>
      {#each deckTypes as deckType}
        <option value={deckType.id}>{deckType.name}</option>
      {/each}
    </select>
  {/await}
</main>

<style>
</style>
