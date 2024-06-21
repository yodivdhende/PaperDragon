<script lang="ts">
	import Card from "$lib/components/cards/card.svelte";
    export let data;
</script>
    {#if data.template}
        <Card card={data.template}/>
    {/if}
<style>
</style>