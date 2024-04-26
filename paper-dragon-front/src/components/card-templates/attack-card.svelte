<script lang="ts">
  import Attributes from "../card-sections/attributes/attributes.svelte";
  import { CardTypes, type AttackCardData } from "./card-templates.type";

  export let card: AttackCardData = {
    cardType: CardTypes.attack,
    name: "name",
    id: "id",
    image: "image",
    type: "type",
    kost: "kost",
    effect: "effect",
    damage: "dmg",
    damagetype: "dmg-type",
    mind: "M",
    strength: "S",
    reflex: "R",
  };

  export let scale = 1;
</script>

<main style={`--scale: ${scale}`}>
  <div class="kost">{card.kost}</div>
  <div class="name">{card.name}</div>
  <div class="damage">{card.damage}</div>
  <div class="type"><em>{card.type}</em></div>
  <div class="damageType">{@html card.damagetype}</div>
  <div class="effect">{@html card.effect}</div>
  <div class="attributes">
    <Attributes data={card}></Attributes>
  </div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    --outline-width: calc(10px * var(--scale));
    width: calc(100% - var(--outline-width) * 2);
    height: calc(100% - var(--outline-width) * 2);
    border: var(--outline-width) solid orange;
    border-radius: calc(20px * var(--scale));
    background-color: white;
    color: black;
    font-size: calc(1rem * var(--scale));
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
    grid-template-areas:
      "kost name ."
      "damage type ."
      "damageType . ."
      "effect effect effect "
      ". attributes id";
  }
  .kost {
    grid-area: kost;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: 2em;
  }
  .name {
    grid-area: name;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 2em;
    font-weight: bolder;
    border-bottom: 3px solid black;
  }
  .damage {
    grid-area: damage;
    display: grid;
    justify-content: center;
    align-content: center;
    font-weight: bolder;
    border-radius: 50% 50% 0 0;
    background-color: red;
  }
  .type {
    grid-area: type;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  .damageType {
    grid-area: damageType;
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 0 0 100% 100%;
    background-color: red;
  }

  .effect {
    grid-area: effect;
    justify-self: center;
    padding-top: 2em;
  }

  :global(.damageType > img),
  :global(.effect > img) {
    width: 1.2em;
    height: 1.2em;
  }

  .attributes {
    grid-area: attributes;
  }
  .id {
    grid-area: id;
    font-size: 0.8em;
    display: grid;
    justify-content: center;
    align-content: end;
  }
</style>
