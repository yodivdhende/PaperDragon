<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import type { StatusCardData } from './card-type.types';

	export let card: StatusCardData;
	export let canEdit: boolean = false;
	const asHtml = true;
</script>

<main class="card-front">
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-image">
		{@html card.icon}
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.effect} {canEdit} {asHtml} />
	</div>
	<div class="card-front-id">
		{card.id}
	</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 5fr 5fr 1fr;
		grid-template-areas:
			'. name   .'
			'. image .'
			'effect  effect effect '
			'.  . id';
	}
</style>
