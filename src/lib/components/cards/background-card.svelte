<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import AttributesStats from '../card-sections/attributes/attributes-stats.svelte';
	import { type BackgroundCardData } from './card-type.types';

	export let card: BackgroundCardData;
	export let canEdit: boolean = false;
</script>

<main class="card-front">
	<div class="card-front-lp">
		<CanEdit bind:value={card.lp} {canEdit} />
	</div>
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-attributes">
		<AttributesStats bind:card />
	</div>
	<div class="card-front-id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 11fr 1fr;
		grid-template-areas:
			'lp name .'
			'. attributes .'
			'. . .'
			'. . id';
	}
</style>
