<script lang="ts">
  import ActionBackCard from "./action-card-back.svelte";
  import BossCardBack from "./boss-card-back.svelte";
  import { CARDTYPES, isActionCard, type CardData } from "./card-type.types";
  import TrapBackCard from "./trap-card-back.svelte";

  export let card: CardData;
</script>

{#if card === undefined}
  <p></p>
{:else if card.cardType === CARDTYPES.trap}
  <TrapBackCard {card} --border-color="purple" />
{:else if card.cardType === CARDTYPES.bosses}
  <BossCardBack {card} --border-color="black" />
{:else if isActionCard(card)}
  <ActionBackCard {card} --border-color="black" />
{:else}
  <div class="card" style={`--border-color: silver`}></div>
{/if}

<style>
  :global(.card) {
    --border-size: calc(10px * var(--scale));
    width: calc(100% - var(--border-size) * 2);
    height: calc(100% - var(--border-size) * 2);
    border: var(--border-size) solid var(--border-color);
    border-radius: 20px;
    background-color: white;
    color: black;
    display: grid;
    place-content: center;
  }
</style>
