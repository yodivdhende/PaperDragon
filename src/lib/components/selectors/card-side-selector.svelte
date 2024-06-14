<script lang="ts">
  import {
    CARDSIDE,
    selectedCardSideStore,
  } from "../../services/card-selector.service";
</script>

<main>
  <select bind:value={$selectedCardSideStore}>
    {#each Object.values(CARDSIDE) as side}
      <option value={side}>{side}</option>
    {/each}
  </select>
</main>

<style>
</style>
