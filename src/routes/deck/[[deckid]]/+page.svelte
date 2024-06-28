<script lang="ts">
	import Card from '$lib/components/cards/card.svelte';

    export let data;
    const {deck} = data;
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
        display:grid;
        grid-template-columns: repeat(4,1fr);
    }

</style>