<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';

	export let data;
	const { cards } = data;
</script>

<main>
	{#each cards as card}
		<a href="card/{card.id}">
			<Card {card} />
		</a>
	{/each}
</main>

<style>
</style>
