<script lang="ts">
	import type { Deck } from '../services/deck.service';
	import Card from './cards/card.svelte';

	export let deck: Deck;
</script>

{#if deck}
	<div class="deck" id={deck.id}>
		{#each deck.cards as card}
			<div class="card">
				<div class="amount">{card.amount}</div>
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

	.card {
		position: relative;
	}
	.amount {
		position: absolute;
		top: -0.5em;
		right: -0.5em;
		width: 1em;
		height: 1em;
		padding: 1em;
		text-align: center;
		border-radius: 50%;
		background-color: rgba(200, 200, 200, 0.8);
	}
</style>
