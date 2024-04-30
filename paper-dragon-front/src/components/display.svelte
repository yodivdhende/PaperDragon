<script lang="ts">
  import {
    DISPLAYTYPES,
    type DisplayType,
  } from "../services/display-type-selector.service";
  import { selectedDefaulCardTemplateStore } from "../services/card-selector.service";
  import Card from "./cards/card.svelte";
  import Deck from "./deck.svelte";

  export let displayType: DisplayType;
</script>

<main>
  {#if displayType === DISPLAYTYPES.template}
    <div>
      <Card card={$selectedDefaulCardTemplateStore}></Card>
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
