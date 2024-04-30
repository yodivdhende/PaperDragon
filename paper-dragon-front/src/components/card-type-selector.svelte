<script lang="ts">
  import { selectedCardTypeStore } from "../services/card-selector.service";
  import { CARDTYPES } from "./cards/card-type.types";

  const cardTypesKeys = Object.values(CARDTYPES);
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
