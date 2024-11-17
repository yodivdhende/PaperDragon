<script lang="ts">
	export let value: unknown;
	export let canEdit: boolean = true;
	export let asHtml: boolean = true;
	const updateValue = ({ data }: any) => (value = data);
</script>

{#if asHtml}
	<div contenteditable={canEdit} on:input={updateValue}>{@html value}</div>
{:else}
	<div contenteditable={canEdit} on:input={updateValue}>{value}</div>
{/if}

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
