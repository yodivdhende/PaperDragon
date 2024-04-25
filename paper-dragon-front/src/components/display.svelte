<script lang="ts">
  import { selectedCardTemplateStore } from "../services/card-type-selector.service";
  import {
    DISPLAYTYPES,
    type DisplayType,
  } from "../services/display-type-selector.service";
  import Card from "./card-templates/card.svelte";
  import Deck from "./deck.svelte";

  export let displayType: DisplayType;

  $: card = {
    template: $selectedCardTemplateStore,
  };
</script>

<main>
  {#if displayType === DISPLAYTYPES.template}
    <div class="card">
      <Card {card}></Card>
    </div>
  {/if}
  {#if displayType === DISPLAYTYPES.deck}
    <Deck />
  {/if}
</main>

<style>
  main {
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
  }
</style>
