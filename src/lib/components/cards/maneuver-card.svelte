<script lang="ts">
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import type { ManeuverCardData } from './card-type.types';

	export let card: ManeuverCardData;
	export let canEdit: boolean = true;
	const setName = ({ data }: any) => (card.name = data);
	const setEffect = ({ data }: any) => (card.effect = data);
</script>

<main class="card">
	<div class="kost">
		<Value bind:value={card.kost} />
	</div>
	<div contenteditable={canEdit} on:input={setName} class="name">{card.name}</div>
	<div class="type"><em>{card.type}</em></div>
	<div contenteditable={canEdit} on:input={setEffect} class="effect">{@html card.effect}</div>
	<div class="attributes">
		<Attributes attributes={card.attributes}></Attributes>
	</div>
	<div class="id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
		grid-template-areas:
			'kost name   .'
			'damage type .'
			'damageType . .'
			'effect  effect effect '
			'.  attributes id';
	}
</style>
