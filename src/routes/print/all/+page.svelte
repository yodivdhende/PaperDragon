<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';
	import SettingsLayout from '$lib/components/settings-layout.svelte';
	import * as htmlToImage from 'html-to-image';
	import download from 'downloadjs';
	import { getPrintConfig } from '$lib/utils/deck.utils.js';

	export let data;
	const { decks } = data;

	let mainWidth: number;
	$: scale = mainWidth / 4 / 500;
	let deckFrontElements: HTMLElement[] = [];
	let deckBackElements: HTMLElement[] = [];
	let canEdit = false;

	async function printAll() {
		for (let index = 0; index < decks.length; index++) {
			const deck = decks[index];
			const frontUrl = await htmlToImage.toPng(deckFrontElements[index]);
			const backUrl = await htmlToImage.toPng(deckBackElements[index]);
			download(frontUrl, `PD-${deck.id}-front.png`);
			download(backUrl, `PD-${deck.id}-back.png`);
		}
	}

	function getConfig() {
		download(getPrintConfig(decks), 'importConfig.txt');
	}
</script>

<SettingsLayout>
	<main slot="section" bind:clientWidth={mainWidth}>
		{#each decks as deck, index}
			<div class="deck" bind:this={deckFrontElements[index]}>
				{#each deck.cards as card}
					<Card {card} {canEdit} {scale} side={'Front'} />
				{/each}
			</div>
			<div class="deck" bind:this={deckBackElements[index]}>
				{#each deck.cards as card}
					<Card {card} {canEdit} {scale} side={'Back'} />
				{/each}
			</div>
		{/each}
	</main>
	<div slot="aside">
		<button on:click={printAll}>download images</button>
		<button on:click={getConfig}>download config</button>
	</div>
</SettingsLayout>

<style>
	.deck {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
