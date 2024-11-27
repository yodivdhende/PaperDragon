<script lang="ts">
	import DeckPreview from '$lib/components/deck-preview.svelte';

	export let data;
	let { decks } = data;
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
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
		width: auto;
		padding: 16px;
		overflow-y: scroll;
	}

	a {
		display: block;
		width: 250px; /* TODO make this reactive */
		padding: 0;
	}
</style>
