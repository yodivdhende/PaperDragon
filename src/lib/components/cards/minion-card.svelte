<script lang="ts">
	import AttributesStats from '../card-sections/attributes/attributes-stats.svelte';
	import { type MinionCardData } from './card-type.types';

	export let card: MinionCardData;
</script>

<main class="card">
	<div class="lp">{card.lp}</div>
	<div class="name">{card.name}</div>
	<div class="type">{card.type}</div>
	<div class="kost">{card.actions}</div>
	<div class="effect">{@html card.passive}</div>
	<div class="attributes">
		<AttributesStats bind:card />
	</div>
	<div class="id">{card.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		place-content: center;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 2fr 10fr 1fr;
		grid-template-areas:
			'lp name .'
			'kost type .'
			'effect effect effect'
			'. attributes id';
	}
</style>
