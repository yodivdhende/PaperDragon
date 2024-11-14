<script lang="ts">
	import SettingsLayout from '$lib/components/settings-layout.svelte';

	export let data;
</script>

<SettingsLayout>
	<slot slot="section" />
	<!-- <div slot="aside">
		<DeckSelector deckTypes={data.decktypes} />
		<CardSideSelector />
		<ExportButton />
	</div> -->
</SettingsLayout>

<style>
</style>
