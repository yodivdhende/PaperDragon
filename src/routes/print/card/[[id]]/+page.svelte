<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';

	export let data;
	const { deck } = data;
	let mainElement: HTMLElement;
	$: cardScale = mainElement.clientWidth / 4 / 500;
</script>

<main bind:this={mainElement}>
	{#if deck}
		{#each deck.cards as card}
			<Card {card} canEdit={false} scale={cardScale} />
		{/each}
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
