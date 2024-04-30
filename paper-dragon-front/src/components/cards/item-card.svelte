<script lang="ts">
  import Attributes from "../card-sections/attributes/attributes.svelte";
  import { CARDTYPES, type ItemCardData } from "./card-type.types";

  export let card: ItemCardData;
</script>

<main class="card">
  <div class="kost">{card.kost}</div>
  <div class="name">{card.name}</div>
  <div class="type"><em>{card.type}</em></div>
  <div class="effect">{@html card.effect}</div>
  <div class="attributes">
    <Attributes {card} />
  </div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
    grid-template-areas:
      "kost name   ."
      "damage type ."
      "damageType . ."
      "effect  effect effect "
      ".  attributes id";
  }
</style>
