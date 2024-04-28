<script lang="ts">
  import { CardTypes, type BossesCardData } from "./card-templates.type";

  export let card: BossesCardData ;
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="id">{card.id}</div>
  <div class="lp">{card.lp}</div>
  <div class="condition">{card.condition}</div>
  <div class="defeatcondition">{card.defeatcondition}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
  }
</style>
