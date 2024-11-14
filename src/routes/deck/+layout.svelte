<script lang="ts">
	import SettingsLayout from '$lib/components/settings-layout.svelte';
	import ExportButton from '../../lib/components/export-button.svelte';
	import CardSideSelector from '../../lib/components/selectors/card-side-selector.svelte';
</script>

<SettingsLayout>
	<slot slot="section" />
	<div slot="aside">
		<CardSideSelector />
		<ExportButton />
	</div>
</SettingsLayout>

<style>
</style>
