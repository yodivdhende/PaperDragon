<script lang="ts">
	import DeckSelector from "$lib/components/selectors/deck-selector.svelte";
	import SettingsLayout from "$lib/components/settings-layout.svelte";

    export let data;

</script>
<SettingsLayout>
    <div slot="section">
        <slot />
    </div>
    <div slot="aside">
        <DeckSelector deckTypes={data.decktypes} />
    </div>
</SettingsLayout>
<style>
</style>