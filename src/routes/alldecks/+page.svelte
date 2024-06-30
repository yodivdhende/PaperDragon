<script lang="ts">
	import Deck from "$lib/components/deck.svelte";
	import ExportButton from "$lib/components/export-button.svelte";
	import CardSideSelector from "$lib/components/selectors/card-side-selector.svelte";
	import SettingsLayout from "$lib/components/settings-layout.svelte";

    export let data;
    const decks = data.decks;
</script>
<SettingsLayout>
    <section slot="section">
        {#if decks}
            {#each decks as deck}
            <div class="deck-container">
                <Deck {deck} />
            </div>
            {/each}
        {/if}
    </section>
    <div slot="aside">
        <CardSideSelector />
        <ExportButton />
    </div>
</SettingsLayout>
<style>
    section {
        width:100%;
        height: 100%;
        overflow: scroll;
    }
    .deck-container {
        outline: 1px solid blue;
    }
</style>