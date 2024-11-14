<script lang="ts">
	import type { Deck } from '../services/deck.service';
	import Card from './cards/card.svelte';

	export let deck: Deck;
</script>

{#if deck}
	<div class="deck" id={deck.id}>
		{#each deck.cards as card}
			<Card {card}></Card>
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
</style>
