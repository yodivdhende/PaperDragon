<script lang="ts">
  import { selectedCardTemplateStore } from "../services/card-type-selector.service";
  import {
    DISPLAYTYPES,
    type DisplayType,
  } from "../services/display-type-selector.service";
  import Card from "./card-templates/card.svelte";

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
</main>

<style>
  main {
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  .card {
    --width: 500px;
    width: var(--width);
    height: calc(var(--width) * 1.39);
  }
</style>
