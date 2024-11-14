<script lang="ts">
	import Deck from '$lib/components/deck.svelte';
	import ExportButton from '../../../lib/components/export-button.svelte';
	import CardSideSelector from '../../../lib/components/selectors/card-side-selector.svelte';
	import SettingsLayout from '../../../lib/components/settings-layout.svelte';
	export let data;
	const { deck } = data;

	async function saveDeck() {
		if (deck == null) return;
		const response = await fetch(`/deck/${deck.id}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(deck)
		});
		console.log(`%c saveDeck reponse`, `background:white;color:black`, response);
	}
</script>

<SettingsLayout>
	<Deck slot="section" {deck} />
	<div slot="aside">
		<CardSideSelector />
		<ExportButton />
		<button on:click={saveDeck}>save</button>
	</div>
</SettingsLayout>

<style>
</style>
