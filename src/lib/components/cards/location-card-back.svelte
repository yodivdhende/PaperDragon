<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import type { LocationCardData } from './location-card.type';

	export let card: LocationCardData;
	export let canEdit: boolean = false;
	const asHtml = true;
</script>

<main class="card-front">
	<div class="target">
		<CanEdit bind:value={card.exploreTarget} {canEdit} />
	</div>
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-type">
		<CanEdit bind:value={card.locationType} {canEdit} />
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.effect} {canEdit} {asHtml} />
	</div>
	<div class="card-front-id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		place-content: center;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 12fr 1fr;
		grid-template-areas:
			'target name .'
			'. type .'
			'effect effect effect'
			'. . id';
	}
	.target {
		grid-area: target;
		display: grid;
		place-content: center;
		background-color: silver;
		font-size: 2em;
	}
</style>
