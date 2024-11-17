<script lang="ts">
	import AttributesStats from '../card-sections/attributes/attributes-stats.svelte';
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import { type BackgroundCardData } from './card-type.types';

	export let card: BackgroundCardData;
</script>

<main class="card">
	<div class="lp">{card.lp}</div>
	<div class="name">{card.name}</div>
	<div class="attributes">
		<AttributesStats bind:card />
	</div>
	<div class="id">{card.id}</div>
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
