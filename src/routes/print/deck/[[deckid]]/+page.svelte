<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';
	import CardSideSelector from '$lib/components/selectors/card-side-selector.svelte';
	import SettingsLayout from '$lib/components/settings-layout.svelte';
	import { selectedCardSideStore } from '$lib/services/card-selector.service';
	import * as htmlToImage from 'html-to-image';
	import download from 'downloadjs';

	export let data;
	const { deck } = data;

	let mainElement: HTMLElement;
	$: cardScale = mainElement?.clientWidth / 4 / 500;

	async function exportPrintImg() {
		if (deck == null) return console.error('no deck');
		const url = await htmlToImage.toPng(mainElement);
		download(url, `${deck.name}-${$selectedCardSideStore}`);
	}
</script>

<SettingsLayout>
	<div bind:this={mainElement} slot="section">
		{#if deck}
			{#each deck.cards as card}
				<Card {card} canEdit={false} scale={cardScale} />
			{/each}
		{/if}
	</div>
	<div slot="aside">
		<CardSideSelector />
		<button on:click={exportPrintImg}>download</button>
	</div>
</SettingsLayout>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
