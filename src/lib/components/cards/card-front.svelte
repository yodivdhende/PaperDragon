<script lang="ts">
  import { CARDTYPES } from "./card-type.types";
  import AttackCard from "./attack-card.svelte";
  import ManeuverCard from "./maneuver-card.svelte";
  import ItemCard from "./item-card.svelte";
  import StatusCard from "./status-card.svelte";
  import ConditionCard from "./condition-card.svelte";
  import MinionCard from "./minion-card.svelte";
  import ArtifactCard from "./artifact-card.svelte";
  import BackgroundCard from "./background-card.svelte";
  import BossCard from "./boss-card.svelte";
  import TrapCard from "./trap-card.svelte";
  import LocationCard from "./location-card.svelte";
	import type { CardData } from "./card-data.types";

  export let card: CardData;
</script>

{#if card.cardType === CARDTYPES.attack}
  <AttackCard {card} --border-color="orange" />
{:else if card.cardType === CARDTYPES.maneuver}
  <ManeuverCard {card} --border-color="blue" />
{:else if card.cardType === CARDTYPES.item}
  <ItemCard {card} --border-color="lime" />
{:else if card.cardType === CARDTYPES.trap}
  <TrapCard {card} --border-color="purple" />
{:else if card.cardType === CARDTYPES.status}
  <StatusCard {card} --border-color="red" />
{:else if card.cardType === CARDTYPES.condition}
  <ConditionCard {card} --border-color="silver" />
{:else if card.cardType === CARDTYPES.minions}
  <MinionCard {card} --border-color="black" />
{:else if card.cardType === CARDTYPES.bosses}
  <BossCard {card} --border-color="black" />
{:else if card.cardType === CARDTYPES.artifacts}
  <ArtifactCard {card} --border-color="black" />
{:else if card.cardType === CARDTYPES.backgrounds}
  <BackgroundCard {card} --border-color="black" />
{:else if card.cardType === CARDTYPES.locations}
  <LocationCard {card} --border-color="green" />
{/if}

<style>
  :global(.card) {
    --outline-width: calc(10px * var(--scale));
    width: calc(100% - var(--outline-width) * 2);
    height: calc(100% - var(--outline-width) * 2);
    border: var(--outline-width) solid;
    border-radius: calc(20px * var(--scale));
    border-color: var(--border-color);
    background-color: white;
    color: black;
    font-size: calc(1rem * var(--scale));
    display: grid;
  }

  :global(.kost) {
    grid-area: kost;
    display: grid;
    place-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: 2em;
  }

  :global(.name) {
    grid-area: name;
    display: grid;
    place-content: center;
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
    align-content: start;
    justify-content: center;
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

  :global(.lp) {
    grid-area: lp;
    font-size: 2em;
    display: grid;
    place-content: center;
    background-color: lightcoral;
  }

  :global(.actions) {
    grid-area: actions;
    font-size: 2em;
    text-align: center;
    background-color: yellow;
  }

  :global(.image) {
    grid-area: image;
  }
  :global(.image img) {
    width: 100%;
    height: 100%;
  }
</style>
