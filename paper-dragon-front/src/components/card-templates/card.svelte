<script lang="ts">
  import {
    CardTypes,
    type CardData,
    type CardTemplate,
  } from "./card-templates.type";
  import AttackCard from "./attack-card.svelte";
  import ManeuverCard from "./maneuver-card.svelte";
  import ItemCard from "./item-card.svelte";
  import StatusCard from "./status-card.svelte";
  import ConditionCard from "./condition-card.svelte";
  import ActionBackCard from "./action-back-card.svelte";
  import MinionCard from "./minion-card.svelte";
  import ArtifactCard from "./artifact-card.svelte";
  import BackgroundCard from "./background-card.svelte";
  import BossCard from "./boss-card.svelte";

  export let cardType: CardTemplate;
  export let card: CardData;
  export let scale = 1;
</script>

<main style={`--scale: ${scale}`}>
  {#if card === undefined && cardType !== undefined}
    {#if cardType === CardTypes.attack}
      <AttackCard --border-color="orange" />
    {:else if cardType === CardTypes.maneuver}
      <ManeuverCard --border-color="blue" />
    {:else if cardType === CardTypes.item}
      <ItemCard --border-color="lime" />
    {:else if cardType === CardTypes.status}
      <StatusCard --border-color="red" />
    {:else if cardType === CardTypes.condition}
      <ConditionCard --border-color="silver" />
    {:else if cardType === CardTypes.minions}
      <MinionCard --border-color="black" />
    {:else if cardType === CardTypes.bosses}
      <BossCard --border-color="black" />
    {:else if cardType === CardTypes.artifacts}
      <ArtifactCard --border-color="black" />
    {:else if cardType === CardTypes.backgrounds}
      <BackgroundCard --border-color="black" />
    {/if}
  {:else if card.cardType === CardTypes.actionBack}
    <ActionBackCard />
  {:else if card.cardType === CardTypes.attack}
    <AttackCard {card} --border-color="orange" />
  {:else if card.cardType === CardTypes.maneuver}
    <ManeuverCard {card} --border-color="blue" />
  {:else if card.cardType === CardTypes.item}
    <ItemCard {card} --border-color="lime" />
  {:else if card.cardType === CardTypes.status}
    <StatusCard {card} --border-color="red" />
  {:else if card.cardType === CardTypes.condition}
    <ConditionCard {card} --border-color="silver" />
  {:else if card.cardType === CardTypes.minions}
    <MinionCard {card} --border-color="black" />
  {:else if card.cardType === CardTypes.bosses}
    <BossCard {card} --border-color="black" />
  {:else if card.cardType === CardTypes.artifacts}
    <ArtifactCard {card} --border-color="black" />
  {:else if card.cardType === CardTypes.backgrounds}
    <BackgroundCard {card} --border-color="black" />
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
    display: grid;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    font-size: 2em;
    font-weight: bolder;
    background-color: red;
  }
  :global(.type) {
    grid-area: type;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  :global(.effect) {
    grid-area: effect;
    justify-self: center;
    font-size: 1.2em;
    padding: 2em 1em;
  }
  :global(.damage > img) {
    width: 1em;
    height: 1em;
    display: inline;
  }
  :global(.effect > img) {
    width: 2em;
    height: 2em;
    display: inline;
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
