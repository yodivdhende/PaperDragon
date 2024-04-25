<script lang="ts">
  import {
    DISPLAYTYPES,
    currentDisplayStore,
  } from "../services/display-type-selector.service";

  let displayTypes = Object.values(DISPLAYTYPES);
</script>

<main>
  <select bind:value={$currentDisplayStore}>
    {#each displayTypes as type}
      <option value={type}>{type}</option>
    {/each}
  </select>
</main>
