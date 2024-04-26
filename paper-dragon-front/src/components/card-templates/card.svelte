<script lang="ts">
  import {
    CardTypes,
    type CardTemplate,
    type CardData,
  } from "./card-templates.type";
  import AttackCard from "./attack-card.svelte";
  import ManeuverCard from "./maneuver-card.svelte";
  import ItemCard from "./item-card.svelte";
  import StatusCard from "./status-card.svelte";
  import ConditionCard from "./condition-card.svelte";
  import ActionBackCard from "./action-back-card.svelte";

  export let card: CardData;
  export let scale = 1;
</script>

<main style={`--scale: ${scale}`}>
  {#if card === undefined}
    no card{/if}
  {#if card.cardType === CardTypes.actionBack}
    <ActionBackCard></ActionBackCard>
  {:else if card.cardType === CardTypes.attack}
    <AttackCard {card} --border-color="orange"></AttackCard>
  {:else if card.cardType === CardTypes.maneuver}
    <ManeuverCard {card} --border-color="blue"></ManeuverCard>
  {:else if card.cardType === CardTypes.item}
    <ItemCard --border-color="lime"></ItemCard>
  {:else if card.cardType === CardTypes.status}
    <StatusCard --border-color="red"></StatusCard>
  {:else if card.cardType === CardTypes.condition}
    <ConditionCard --border-color="silver"></ConditionCard>
  {/if}
</main>

<style>
  main {
    --width: calc(500px * var(--scale));
    width: var(--width);
    height: calc(var(--width) * 1.39);
  }
  :global(.card) {
    --outline-width: calc(10px * var(--scale));
    width: calc(100% - var(--outline-width) * 2);
    height: calc(100% - var(--outline-width) * 2);
    border: var(--outline-width) solid;
    border-radius: calc(20px * var(--scale));
    background-color: white;
    color: black;
    font-size: calc(1rem * var(--scale));
  }

  :global(.kost) {
    grid-area: kost;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: 2em;
  }

  :global(.name) {
    grid-area: name;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 2em;
    font-weight: bolder;
    border-bottom: 3px solid black;
  }
  :global(.damage) {
    grid-area: damage;
    display: grid;
    justify-content: center;
    align-content: center;
    font-weight: bolder;
    border-radius: 50% 50% 0 0;
    background-color: red;
  }
  :global(.type) {
    grid-area: type;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  :global(.damageType) {
    grid-area: damageType;
    display: grid;
    justify-content: center;
    align-content: center;
    border-radius: 0 0 100% 100%;
    background-color: red;
  }
  :global(.effect) {
    grid-area: effect;
    justify-self: center;
    padding-top: 2em;
  }
  :global(.damageType > img),
  :global(.effect > img) {
    width: 1.2em;
    height: 1.2em;
  }

  :global(.attributes) {
    grid-area: attributes;
  }

  :global(.id) {
    grid-area: id;
    font-size: 0.8em;
    display: grid;
    justify-content: center;
    align-content: end;
  }
</style>
