<script lang="ts">
  import {
    CARDTYPES,
    selectedCardTypeStore,
  } from "../services/card-type-selector.service";

  const cardTypesKeys = Object.keys(CARDTYPES);
</script>

<main>
  <select bind:value={$selectedCardTypeStore}>
    {#each cardTypesKeys as type}
      <option value={type}>{type}</option>
    {/each}
  </select>
</main>

<style>
</style>
