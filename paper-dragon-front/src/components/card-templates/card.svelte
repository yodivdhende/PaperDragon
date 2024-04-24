<script lang="ts">
  import { CardTemplates, type CardTemplate, type CardData } from "./card-templates.type";
  import AttackCard from "./attack-card.svelte";
  import ManeuverCard from "./maneuver-card.svelte";
  import ItemCard from "./item-card.svelte";
  import StatusCard from "./status-card.svelte";
  import ConditionCard from "./condition-card.svelte";
  import ActionBackCard from "./action-back-card.svelte";

  export let card: {template: CardTemplate}= {
    template: CardTemplates.actionBack,
  };
</script>

<main>
  {#if card.template === CardTemplates.actionBack}
    <ActionBackCard></ActionBackCard>
  {:else if card.template === CardTemplates.attack}
    <AttackCard></AttackCard>
  {:else if card.template === CardTemplates.maneuver}
    <ManeuverCard></ManeuverCard>
  {:else if card.template === CardTemplates.item}
    <ItemCard></ItemCard>
  {:else if card.template === CardTemplates.status}
    <StatusCard></StatusCard>
  {:else if card.template === CardTemplates.condition}
    <ConditionCard></ConditionCard>
  {/if}
</main>

<style>
  main {
    height: 100%;
  }
</style>
