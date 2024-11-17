<script lang="ts">
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import type { ItemCardData } from './item-card.type';

	export let card: ItemCardData;
	export let canEdit: boolean = true;
	const setName = ({ data }: any) => (card.name = data);
	const setEffect = ({ data }: any) => (card.effect = data);
	const setUses = ({ data }: any) => (card.uses = data);
</script>

<main class="card">
	<div class="kost">
		<Value bind:value={card.kost} />
	</div>
	<div contenteditable={canEdit} on:input={setName} class="name">{card.name}</div>
	<div class="uses">
		<Value bind:value={card.uses} {canEdit} />
		<div class="type"><em>{card.type}</em></div>
		<div contenteditable={canEdit} on:input={setEffect} class="effect">{@html card.effect}</div>
		<div class="attributes">
			<Attributes attributes={card.attributes} />
		</div>
		<div class="id">{card.id}</div>
	</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
		grid-template-areas:
			'kost name   .'
			'uses type .'
			'. . .'
			'effect  effect effect '
			'.  attributes id';
	}

	.uses {
		grid-area: uses;
		font-size: 1.5em;
		text-align: center;
	}
</style>
