<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';
	import SettingsLayout from '$lib/components/settings-layout.svelte';
	import * as htmlToImage from 'html-to-image';
	import download from 'downloadjs';

	export let data;
	const { decks } = data;

	let mainWidth: number;
	$: scale = mainWidth / 4 / 500;
	let deckFrontElements: HTMLElement[] = [];
	let deckBackElements: HTMLElement[] = [];
	let canEdit = false;

	async function printAll() {
		await Promise.all(
			decks.map(async (deck, index) => {
				const frontUrl = await htmlToImage.toPng(deckFrontElements[index]);
				const backUrl = await htmlToImage.toPng(deckBackElements[index]);
				download(frontUrl, `${deck.id}-front`);
				download(backUrl, `${deck.id}-back`);
			})
		);
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
		<button on:click={printAll}>download</button>
	</div>
</SettingsLayout>

<style>
	.deck {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
</style>
