<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import type { TrapCardData } from './card-type.types';

	export let card: TrapCardData;
	export let canEdit: boolean = false;
	const asHtml = true;
</script>

<main class="card-front">
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-kost">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.name} {canEdit} {asHtml} />
	</div>
	<div class="card-front-attributes">
		<Attributes attributes={card.attributes} />
	</div>
	<div class="card-front-id">{card.id}</div>
</main>

<style>
	main {
		place-content: center;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 11fr 1fr;
		grid-template-areas:
			'kost name .'
			'. type .'
			'effect effect effect '
			'. attributes id';
	}
</style>
