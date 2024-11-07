<script lang="ts">
	export let data;
	let {decks} = data;
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
