<script lang="ts">
	import Deck from '$lib/components/deck.svelte';
    export let data;
    const {deck} = data;
</script>
    <Deck {deck} />
<style>
</style>