<script lang="ts">
  import Attributes from "../card-sections/attributes/attributes.svelte";
  import { type BossesCardData } from "./card-type.types";

  export let card: BossesCardData;
</script>

<main class="card">
  <div class="lp">0</div>
  <div class="name">{card.name}</div>
  <div class="kost">{card.actions}</div>
  <div class="type">{card.type}</div>
  <div class="effect">{@html card.defeatcondition}</div>
  <div class="attributes">
    <Attributes {card}></Attributes>
  </div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 2fr 10fr 1fr;
    grid-template-areas:
      "lp name ."
      "kost type ."
      "effect effect effect"
      ". attributes  id";
  }
</style>
