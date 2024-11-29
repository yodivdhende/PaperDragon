<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';
	import CardSideSelector from '$lib/components/selectors/card-side-selector.svelte';
	import SettingsLayout from '$lib/components/settings-layout.svelte';
	import * as htmlToImage from 'html-to-image';
	import download from 'downloadjs';
	import { getPrintConfig } from '$lib/utils/deck.utils.js';

	export let data;
	const { deck } = data;

	let frontElement: HTMLElement;
	let backElement: HTMLElement;
	$: cardScale = frontElement?.clientWidth / 4 / 500;

	async function exportPrintImg() {
		if (deck == null) return console.error('no deck');
		const frontUrl = await htmlToImage.toPng(frontElement);
		const backUrl = await htmlToImage.toPng(backElement);
		download(frontUrl, `PD-${deck.id}-front.png`);
		download(backUrl, `PD-${deck.id}-back.png`);
		download(getPrintConfig([deck]), 'importConfig.txt');
	}
</script>

<SettingsLayout>
	<main slot="section">
		<div class="deck" bind:this={frontElement}>
			{#if deck}
				{#each deck.cards as card}
					<Card {card} canEdit={false} scale={cardScale} side={'Front'} />
				{/each}
			{/if}
		</div>
		<div class="deck" bind:this={backElement}>
			{#if deck}
				{#each deck.cards as card}
					<Card {card} canEdit={false} scale={cardScale} side={'Back'} />
				{/each}
			{/if}
		</div>
	</main>
	<div slot="aside">
		<CardSideSelector />
		<button on:click={exportPrintImg}>download</button>
	</div>
</SettingsLayout>

<style>
	.deck {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
