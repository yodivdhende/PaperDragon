<script lang="ts">
	import ExportButton from "$lib/components/export-button.svelte";
	import CardSideSelector from "$lib/components/selectors/card-side-selector.svelte";
	import SettingsLayout from "$lib/components/settings-layout.svelte";

</script>
<SettingsLayout>
    <slot slot="section"/>
    <div slot="aside">
        <CardSideSelector />
        <ExportButton />
    </div>
</SettingsLayout>
<style>
</style>