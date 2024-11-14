<script lang="ts">
	import type { CardData } from './cards/card-data.types';
	import Card from './cards/card.svelte';

	export let deck: { name: string; previewCard: CardData };
	const { previewCard: card, name } = deck;
</script>

<main>
	<div class="background">
		<Card {card} scale={0.5} />
	</div>
	<p class="deck-name">{name}</p>
</main>

<style>
	main {
		max-width: 250px;
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
	}
	.background {
		grid-column: 1/-1;
		grid-row: 1/2;
		filter: blur(2px);
	}

	.background:hover {
		filter: none;
	}
	.deck-name {
		grid-column: 2;
		grid-row: 1/2;
		align-self: center;
		justify-self: center;
		padding: 0.5em;
		height: min-content;
		width: 100%;
		margin: 0;
		background-color: rgba(200, 200, 200, 0.8);
		color: black;
		text-align: center;
		font-size: 1rem;
		z-index: 1;
	}
</style>
