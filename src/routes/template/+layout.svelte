<script lang="ts">
    import CardSideSelector from '$lib/components/selectors/card-side-selector.svelte'
	import CardTypeSelector from '$lib/components/selectors/card-type-selector.svelte';
	import SettingsLayout from '$lib/components/settings-layout.svelte';
       
</script>
<SettingsLayout>
    <div slot="section">
        <slot />
    </div>
    <div slot="aside">
        <CardTypeSelector />
        <CardSideSelector />
    </div>
</SettingsLayout>
<style>
</style>