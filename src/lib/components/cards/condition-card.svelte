<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import type { ConditionCardData } from './condition-card.type';

	export let card: ConditionCardData;
	export let canEdit: boolean = false;
	const asHtml = true;
</script>

<main class="card-front">
	<div class="card-front-kost">
		<Value bind:value={card.kost} {canEdit} />
	</div>
	<div class="card-front-name">
		<CanEdit bind:value={card.name} {canEdit} />
	</div>
	<div class="card-front-type">
		<em>
			<CanEdit bind:value={card.type} {canEdit} />
		</em>
	</div>
	<div class="card-front-image">
		{@html card.icon}
	</div>
	<div class="card-front-effect">
		<CanEdit bind:value={card.effect} {canEdit} {asHtml} />
	</div>
	<div class="card-front-attributes">
		<Attributes attributes={card.attributes}></Attributes>
	</div>
	<div class="card-front-id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 5fr 5fr 1fr;
		grid-template-areas:
			'kost name .'
			'. type .'
			'. image .'
			'effect effect effect '
			'. attributes id';
	}
</style>
