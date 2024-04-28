<script lang="ts">
  import { CardTypes, type BackgroundCardData } from "./card-templates.type";

  export let card: BackgroundCardData = {
    cardType: CardTypes.backgrounds,
    name: "name",
    id: "id",
    lp: "5",
    mind: "1",
    strength: "1",
    reflex: "1",
  };
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="id">{card.id}</div>
  <div class="lp">{card.lp}</div>
  <div class="mind">{card.mind}</div>
  <div class="strength">{card.strength}</div>
  <div class="reflex">{card.reflex}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
  }
</style>
