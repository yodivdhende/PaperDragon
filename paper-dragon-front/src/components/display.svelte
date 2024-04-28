<script lang="ts">
  import { selectedCardTemplateStore } from "../services/card-template-selector.service";
  import {
    DISPLAYTYPES,
    type DisplayType,
  } from "../services/display-type-selector.service";
  import type { CardTypes } from "./card-templates/card-templates.type";
  import Card from "./card-templates/card.svelte";
  import Deck from "./deck.svelte";

  export let displayType: DisplayType;

  $: card = {
    cardType: $selectedCardTemplateStore,
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
