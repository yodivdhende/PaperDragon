<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import AttributesStats from '../card-sections/attributes/attributes-stats.svelte';
	import { type BossesCardData } from './card-type.types';

	export let card: BossesCardData;
	export let canEdit: boolean = false;
	const asHtml = true;
</script>

<main class="card-front">
	<div class="card-front-lp">
		<CanEdit bind:value={card.lp} {canEdit} />
	</div>
	<div class="card-front-kost">
		<CanEdit bind:value={card.actions} {canEdit} />
	</div>
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-type">
		<CanEdit bind:value={card.type} {canEdit} />
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.effect} {canEdit} {asHtml} />
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
		grid-template-rows: 2fr 2fr 10fr 1fr;
		grid-template-areas:
			'lp name .'
			'kost type .'
			'effect effect effect'
			'. attributes id';
	}
</style>
