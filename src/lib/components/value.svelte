<script lang="ts">
	export let value: number = 0;
	export let canEdit: boolean = true;
	function updateValue(event: Event) {
		if (event instanceof InputEvent === false) return;
		const dateAsNumber = Number(event.data);
		if (isNaN(dateAsNumber)) return;
		value = dateAsNumber;
	}
</script>

<main on:input={updateValue} contenteditable={canEdit}>
	{value}
</main>

<style>
	main {
		width: 1.2em;
		height: 1.2em;
		padding: 0.2em;
		text-align: center;
		border-radius: 50%;
		background-color: white;
	}
</style>
