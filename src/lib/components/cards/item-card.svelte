<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Level from '../card-sections/level/level.svelte';
	import Value from '../value.svelte';
	import type { ItemCardData } from './item-card.type';

	export let card: ItemCardData;
	export let canEdit: boolean = true;

	const asHtml = true;
</script>

<main class="card-front">
	<div class="card-front-kost">
		<Value bind:value={card.kost} />
	</div>
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-uses">
		<CanEdit bind:value={card.uses} {canEdit} />
	</div>
	<div class="card-front-type"><em>{card.type}</em></div>
	<div class="card-front-level">
		<Level level={card.level} />
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.effect} {canEdit} {asHtml} />
	</div>
	<div class="card-front-attributes">
		<Attributes attributes={card.attributes} />
	</div>
	<div class="card-front-id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 10fr 1fr;
		grid-template-areas:
			'kost name level'
			'uses type .'
			'effect  effect effect '
			'.  attributes id';
	}

	.card-front-uses {
		grid-area: uses;
		display: block;
		width: 100%;
		font-size: 1.5em;
		text-align: center;
		background-color: lightgray;
	}
</style>
