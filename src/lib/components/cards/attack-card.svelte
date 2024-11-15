<script lang="ts">
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import { type AttackCardData } from './attack-card.type';

	export let card: AttackCardData;
	export let canEdit: boolean = false;
	const setName = ({ data }: any) => (card.name = data);
	const setAttackType = ({ data }: any) => (card.attackType = data);
	const setEffect = ({ data }: any) => (card.effect = data);
</script>

<main class="card">
	<div class="kost">
		<Value bind:value={card.kost} {canEdit} />
	</div>
	<div contenteditable={canEdit} on:input={setName} class="name">{card.name}</div>
	<div class="damage">
		<Value bind:value={card.damage} {canEdit} />
		{@html card.damageType}
	</div>
	<div contenteditable={canEdit} on:input={setAttackType} class="type">
		{card.attackType}
	</div>
	<div contenteditable={canEdit} on:input={setEffect} class="effect">
		{@html card.effect}
	</div>
	<div class="attributes">
		<Attributes {card}></Attributes>
	</div>
	<div class="id">{card?.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		place-content: center;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
		grid-template-areas:
			'kost name .'
			'damage type .'
			'damageType . .'
			'effect effect effect '
			'. attributes id';
	}
</style>
