<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import { CARDTYPES, type ArtifactCardData } from './card-type.types';

	export let card: ArtifactCardData;
	export let canEdit: boolean = false;
	const asHtml = true;
</script>

<main class="card-front">
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-actions">
		<CanEdit bind:value={card.actions} {canEdit} />
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.mechanics} {canEdit} {asHtml} />
	</div>
	<div class="card-front-id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--background-color);
		place-content: center;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 12fr 1fr;
		grid-template-areas:
			'actions name .'
			'effect effect effect'
			'. . id';
	}
</style>
