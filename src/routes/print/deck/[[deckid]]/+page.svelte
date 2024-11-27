<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';
	import { marketingplatformadmin } from 'googleapis/build/src/apis/marketingplatformadmin/index.js';
	import { onMount } from 'svelte';

	export let data;
	const { deck } = data;

	let mainElement: HTMLElement;
	$: cardScale = 1;

	onMount(() => {
		console.log(mainElement);
		cardScale = window.innerWidth / 4 / 500;
		console.log(cardScale);
	});
</script>

<div bind:this={mainElement}>
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
