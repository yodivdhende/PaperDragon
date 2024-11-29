<script lang="ts">
	import { selectedCardSideStore, type CardSide } from '../../services/card-selector.service';
	import CardBack from './card-back.svelte';
	import type { CardData } from './card-data.types';
	import CardFront from './card-front.svelte';

	export let card: CardData;
	export let scale = 1;
	export let canEdit: boolean = false;
	export let side: CardSide | undefined;

	$: selectedSide = side ?? $selectedCardSideStore;
</script>

<main style={`--scale: ${scale}`}>
	{#if card === undefined}
		no Card found
	{:else if selectedSide === 'Back'}
		<CardBack {card} />
	{:else}
		<CardFront {card} {canEdit} />
	{/if}
</main>

<style>
	main {
		--width: calc(500px * var(--scale));
		width: var(--width);
		height: calc(var(--width) * 1.39);
	}
</style>
