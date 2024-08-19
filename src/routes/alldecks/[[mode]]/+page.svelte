<script lang="ts">
	import Deck from "$lib/components/deck.svelte";

    export let data;
    const decks = data.decks;
</script>
{#if decks}
    {#each decks as deck}
        <Deck {deck} />
    {/each}
{/if}
<style>
</style>