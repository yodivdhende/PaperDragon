<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import { type AttackCardData } from './attack-card.type';

	export let card: AttackCardData;
	export let canEdit: boolean = false;
</script>

<main class="card">
	<div class="kost">
		<Value bind:value={card.kost} {canEdit} />
	</div>
	<div class="name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="damage">
		<Value bind:value={card.damage} {canEdit} />
		{@html card.damageType}
	</div>
	<div class="type">
		<CanEdit bind:value={card.attackType} {canEdit} />
	</div>
	<div class="effect">
		<CanEdit bind:value={card.effect} {canEdit} />
	</div>
	<div class="attributes">
		<Attributes attributes={card.attributes}></Attributes>
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
