<script lang="ts">
  import { type BossesCardData } from "./card-type.types";

  export let card: BossesCardData;
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="type">{card.type}</div>
  <div class="defeat">defeated</div>
  <div class="lp">{card.lp}</div>
  <div class="effect">{@html card.defeatcondition}</div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
    grid-template-areas:
      "lp name ."
      ". type ."
      ". defeat."
      "effect effect effect"
      ". . id";
  }
  .defeat {
    grid-area: defeat;
    text-align: center;
  }
</style>
