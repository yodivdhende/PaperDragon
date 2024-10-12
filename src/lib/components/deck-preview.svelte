<script lang="ts">
	import type { CardData } from './cards/card-data.types';

	export let deck: { name: string; previewCard: CardData };
	const { previewCard: card, name } = deck;
</script>

<main>
	<!-- <div class="background">
		<Card {card} scale={0.5} />
	</div> -->
	<p class="name">{name}</p>
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
	}
	.name {
		grid-column: 2;
		grid-row: 1/2;
		height: 2em;
		padding: 1em;
		background-color: rgba(255, 255, 255, 0.8);
		color: black;
	}
</style>
