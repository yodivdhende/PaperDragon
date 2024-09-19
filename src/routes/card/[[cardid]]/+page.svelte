<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';

	export let data;
	const { card } = data;
</script>

{#if card != null}
	<Card {card} />
{/if}

<style>
</style>
