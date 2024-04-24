<script lang="ts">
  import { CARDTYPES, selectedCardTemplateStore, } from '../services/card-type-selector.service';

  const cardTypesKeys = Object.keys(CARDTYPES);

</script>
<main>
  <select bind:value={$selectedCardTemplateStore}>
    {#each cardTypesKeys as type }
      <option value={type}>{type}</option>
    {/each}
  </select>
</main>
<style>
</style>