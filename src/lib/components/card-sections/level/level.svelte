<script lang="ts">
	export let level: number;
	$: levelObject = { length: level };
</script>

<main>
	{#each levelObject as level}
		<div>⭐</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		text-align: center;
		font-size: 1.5em;
	}
	main div {
		display: block;
	}
</style>
