<script lang="ts">
  import { selectedCardSideStore } from "../../services/card-selector.service";
  import CardBack from "./card-back.svelte";
	import type { CardData } from "./card-data.types";
  import CardFront from "./card-front.svelte";

  export let card: CardData;
  export let scale = 1;
</script>

<main style={`--scale: ${scale}`}>
  {#if card === undefined}
    no Card found
  {:else if $selectedCardSideStore === "Back"}
    <CardBack {card} />
  {:else}
    <CardFront {card} />
  {/if}
</main>

<style>
  main {
    --width: calc(500px * var(--scale));
    width: var(--width);
    height: calc(var(--width) * 1.39);
  }
</style>
