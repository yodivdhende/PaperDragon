<script lang="ts">
	import DeckPreview from '../../lib/components/deck-preview.svelte';
	export let data;
	const { decks } = data;
</script>

<main>
	{#each decks as deck}
		<a href="deck/{deck.id}">
			<DeckPreview {deck} />
		</a>
	{/each}
</main>

<style>
	main {
		display: grid;
		width: auto;
	}

	/* TODO: fix styling so deckpreview is in a grid */
</style>
