<script lang="ts">
  import { type BossesCardData } from "./card-type.types";

  export let card: BossesCardData;
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="id">{card.id}</div>
  <div class="lp">{card.lp}</div>
  <div class="condition">{@html card.condition}</div>
  <div class="defeatcondition">{@html card.defeatcondition}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
  }
</style>
