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
    <AttackCard {card} {scale}></AttackCard>
  {:else if card.cardType === CardTypes.maneuver}
    <ManeuverCard {card} {scale}></ManeuverCard>
  {:else if card.cardType === CardTypes.item}
    <ItemCard></ItemCard>
  {:else if card.cardType === CardTypes.status}
    <StatusCard></StatusCard>
  {:else if card.cardType === CardTypes.condition}
    <ConditionCard></ConditionCard>
  {/if}
</main>

<style>
  main {
    --width: calc(500px * var(--scale));
    width: var(--width);
    height: calc(var(--width) * 1.39);
  }
</style>
