<script lang="ts">
	import ActionBackCard from './action-card-back.svelte';
	import { isActionCard } from './back-card.types';
	import BossCardBack from './boss-card-back.svelte';
	import type { CardData } from './card-data.types';
	import { CARDTYPES } from './card-type.types';
	import TrapBackCard from './trap-card-back.svelte';

	export let card: CardData;
	export let canEdit: boolean = true;
</script>

{#if card === undefined}
	<p></p>
{:else if card.type === CARDTYPES.trap}
	<TrapBackCard {card} --border-color="purple" {canEdit} />
{:else if card.type === CARDTYPES.bosses}
	<BossCardBack {card} --border-color="black" {canEdit} />
{:else if card.type === CARDTYPES.locations}
	<BossCardBack {card} --border-color="black" {canEdit} />
{:else if isActionCard(card)}
	<ActionBackCard {card} --border-color="black" {canEdit} />
{:else}
	<div class="card-back" style={`--border-color: silver`}></div>
{/if}
