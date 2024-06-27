<script lang="ts">
	import { goto } from "$app/navigation";
	import { selectedDeckIdStore } from "$lib/services/deck.service";

  export let deckTypes;

  function selectingDeckType(event: Event & {currentTarget: EventTarget & HTMLSelectElement}) {
    goto(`${event.currentTarget.value}`)
  }
</script>

<main>
    <select bind:value={$selectedDeckIdStore} on:input={(event)=> selectingDeckType(event)}>
      {#each deckTypes as deckType}
        <option value={deckType.id}>{deckType.name}</option>
      {/each}
    </select>
</main>

<style>
</style>
