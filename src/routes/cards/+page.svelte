<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';

	export let data;
	const { cards } = data;
	console.log(cards);
</script>

<main>
	{#each cards as card}
		<a href="card/{card.id}">
			<Card {card} scale={0.75} />
		</a>
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
		gap: 16px;
		width: auto;
		padding: 16px;
		overflow-y: scroll;
	}

	a {
		width: min-content;
	}
</style>
