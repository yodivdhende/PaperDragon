<script lang="ts">
	import ExportButton from "$lib/components/export-button.svelte";
import CardSideSelector from "$lib/components/selectors/card-side-selector.svelte";
	import DeckSelector from "$lib/components/selectors/deck-selector.svelte";
	import SettingsLayout from "$lib/components/settings-layout.svelte";

    export let data;

</script>
<SettingsLayout>
    <section slot="section">
        <slot />
    </section>
    <div slot="aside">
        <DeckSelector deckTypes={data.decktypes} />
        <CardSideSelector />
        <ExportButton/>
    </div>
</SettingsLayout>
<style>
    section {
        width:100%;
        height: 100%;
        overflow: auto;
    }
</style>