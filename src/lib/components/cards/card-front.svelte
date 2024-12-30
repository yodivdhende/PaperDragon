<script lang="ts">
	import { CARDTYPES } from './card-type.types';
	import AttackCard from './attack-card.svelte';
	import ManeuverCard from './maneuver-card.svelte';
	import ItemCard from './item-card.svelte';
	import StatusCard from './status-card.svelte';
	import ConditionCard from './condition-card.svelte';
	import MinionCard from './minion-card.svelte';
	import ArtifactCard from './artifact-card.svelte';
	import BackgroundCard from './background-card.svelte';
	import BossCard from './boss-card.svelte';
	import TrapCard from './trap-card.svelte';
	import LocationCard from './location-card.svelte';
	import type { CardData } from './card-data.types';

	export let card: CardData;
	export let canEdit: boolean = false;
</script>

{#if card.type === CARDTYPES.attack}
	<AttackCard {card} --border-color="orange" {canEdit} />
{:else if card.type === CARDTYPES.maneuver}
	<ManeuverCard {card} --border-color="blue" />
{:else if card.type === CARDTYPES.item}
	<ItemCard {card} --border-color="lime" />
{:else if card.type === CARDTYPES.trap}
	<TrapCard {card} --border-color="purple" />
{:else if card.type === CARDTYPES.status}
	<StatusCard {card} --border-color="silver" />
{:else if card.type === CARDTYPES.condition}
	<ConditionCard {card} --border-color="red" />
{:else if card.type === CARDTYPES.minions}
	<MinionCard {card} --border-color="black" />
{:else if card.type === CARDTYPES.bosses}
	<BossCard {card} --border-color="black" />
{:else if card.type === CARDTYPES.artifacts}
	<ArtifactCard {card} --border-color="black" />
{:else if card.type === CARDTYPES.backgrounds}
	<BackgroundCard {card} --border-color="black" />
{:else if card.type === CARDTYPES.locations}
	<LocationCard {card} --border-color="green" />
{/if}
