<script lang="ts">
	import { goto } from "$app/navigation";
  import { selectedCardTypeStore } from "../../services/card-selector.service";
  import { CARDTYPES  } from "../cards/card-type.types";

  const cardTypesKeys = Object.values(CARDTYPES);

  function selectingTemplate(event: Event & {currentTarget: EventTarget & HTMLSelectElement}) {
    goto(`${event.currentTarget.value}`);
  }
</script>

<main>
  <select bind:value={$selectedCardTypeStore} on:input={(event) => selectingTemplate(event)}>
    {#each cardTypesKeys as type}
      <option value={type}>{type}</option>
    {/each}
  </select>
</main>

<style>
</style>
