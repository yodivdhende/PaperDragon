<script lang="ts">
	import { ATTRIBUTES } from './attributes.type';
	import type { Attribute } from './attributes.type';
	import brain from '$lib/assets/icons/brain.png';
	import biceps from '$lib/assets/icons/biceps.png';
	import walkingBoot from '$lib/assets/icons/walking-boot.png';
	import spikes from '$lib/assets/icons/spikes.png';
	import fireflake from '$lib/assets/icons/fireflake.png';

	export let attributes: Attribute[] | undefined;
</script>

{#if attributes}
	<main>
		{#each attributes as attribute}
			{#if attribute === ATTRIBUTES.mind}
				<div class="mind">
					<img src={brain} alt="brain icon" />
				</div>
			{/if}
			{#if attribute === ATTRIBUTES.strength}
				<div class="strength">
					<img src={biceps} alt="biceps icon" />
				</div>
			{/if}
			{#if attribute === ATTRIBUTES.reflex}
				<div class="reflex">
					<img src={walkingBoot} alt="walking boot" />
				</div>
			{/if}
			{#if attribute === ATTRIBUTES.trouble}
				<div class="trouble">
					<img src={spikes} alt="spiky star" />
				</div>
			{/if}
			{#if attribute === ATTRIBUTES.luck}
				<div class="luck">
					<img src={fireflake} alt="fireflake" />
				</div>
			{/if}
		{/each}
	</main>
{/if}

<style>
	main {
		display: flex;
		height: 100%;
		justify-content: center;
	}
	main > div {
		width: 2em;
		height: 2em;
		padding: 1em;
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
	.trouble {
		background-color: #999;
	}
	.luck {
		background-color: #ddd;
	}
</style>
