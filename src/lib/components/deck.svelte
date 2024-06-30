<script lang="ts">
	import type { Deck } from "$lib/server/deck.server";
	import Card from "./cards/card.svelte";

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
        display:grid;
        grid-template-columns: repeat(4,min-content);
    }
</style>