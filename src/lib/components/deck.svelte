<script lang="ts">
	import type { Deck } from '../services/deck.service';
	import Card from './cards/card.svelte';

	export let deck: Deck;
</script>

{#if deck}
	<div class="deck" id={deck.id}>
		{#each deck.cards as card}
			<div class="deck-card">
				<div class="deck-amount" bind:innerHTML={card.amount} contenteditable></div>
				<Card {card}></Card>
			</div>
		{/each}
	</div>
{/if}

<style>
	.deck {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
		gap: 16px;
		width: auto;
		padding: 16px;
	}

	.deck-card {
		position: relative;
		width: min-content;
	}
	.deck-amount {
		position: absolute;
		top: -0.5em;
		right: -0.5em;
		width: 1em;
		height: 1em;
		padding: 1em;
		text-align: center;
		border-radius: 50%;
		color: black;
		font-size: 1.5rem;
		background-color: rgba(200, 200, 200, 0.8);
	}
</style>
