<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';

	export let data;
	const { deck } = data;

	let mainWidth: number;
	$: cardScale = mainWidth / 4 / 500;
	$: console.log(mainWidth);
</script>

<div bind:clientWidth={mainWidth}>
	{#if deck}
		{#each deck.cards as card}
			<Card {card} canEdit={false} scale={cardScale} />
		{/each}
	{/if}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
