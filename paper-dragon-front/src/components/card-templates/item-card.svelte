<script lang="ts">
  import Attributes from "../card-sections/attributes/attributes.svelte";
  import { CardTypes, type ItemCardData } from "./card-templates.type";

  export let data: ItemCardData = {
    template: CardTypes.item,
    name: "name",
    id: "id",
    type: "type",
    kost: "kost",
    effect: "effect",
    mind: "M",
    strength: "S",
    reflex: "R",
  };
</script>

<main>
  <div class="kost">{data.kost}</div>
  <div class="name">{data.name}</div>
  <div class="type"><em>{data.type}</em></div>
  <div class="effect">{data.effect}</div>
  <div class="attributes">
    <Attributes {data}></Attributes>
  </div>
  <div class="id">{data.id}</div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    outline: 10px solid lime;
    border-radius: 20px;
    background-color: white;
    color: black;
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
  .kost {
    grid-area: kost;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: 2rem;
  }
  .name {
    grid-area: name;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 2rem;
    font-weight: bolder;
    border-bottom: 3px solid black;
  }
  .type {
    grid-area: type;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  .effect {
    grid-area: effect;
    padding-top: 2rem;
  }
  .attributes {
    grid-area: attributes;
  }
  .id {
    grid-area: id;
    display: grid;
    justify-content: end;
    align-content: end;
  }
</style>
