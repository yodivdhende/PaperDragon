<script lang="ts">
  import Attributes from "../card-sections/attributes/attributes.svelte";
  import { CardTypes, type MinionCardData } from "./card-templates.type";

  export let card: MinionCardData = {
    cardType: CardTypes.minions,
    name: "name",
    id: "id",
    type: "type",
    lp: "lp",
    actions: "actions",
    passive: "passive",
    mind: "mind",
    strength: "strength",
    reflex: "reflex",
  };
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="type">{card.type}</div>
  <div class="lp">{card.lp}</div>
  <div class="actions">{card.actions}</div>
  <div class="passive">{card.passive}</div>
  <div class="attributes">
    <Attributes {card}></Attributes>
  </div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
    place-content: center;
  }
</style>
