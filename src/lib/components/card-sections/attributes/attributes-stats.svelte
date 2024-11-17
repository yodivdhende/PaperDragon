<script lang="ts">
	import Value from '$lib/components/value.svelte';
	import brain from '$lib/assets/icons/brain.png';
	import biceps from '$lib/assets/icons/biceps.png';
	import walkingBoot from '$lib/assets/icons/walking-boot.png';
	export let card: { mind: number; strength: number; reflex: number } | undefined;
</script>

{#if card}
	<div class="attributes">
		<div class="mind">
			<Value bind:value={card.mind} />
			<img src={brain} alt="brain icon" />
		</div>
		<div class="strength">
			<Value bind:value={card.strength} />
			<img src={biceps} alt="biceps icon" />
		</div>
		<div class="reflex">
			<Value bind:value={card.reflex} />
			<img src={walkingBoot} alt="walking boot" />
		</div>
	</div>
{/if}

<style>
	.attributes {
		display: flex;
		width: 100%;
	}

	.attributes > div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.5em;
	}

	img {
		width: 2em;
		height: 2em;
	}

	.mind {
		background-color: #39f;
	}

	.strength {
		background-color: #e74c3c;
	}

	.reflex {
		background-color: #3c3;
	}
</style>
