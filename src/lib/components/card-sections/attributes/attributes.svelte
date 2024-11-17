<script lang="ts">
	import { ATTRIBUTES} from './attributes.type';
	import type { Attribute } from './attributes.type';
	import brain from '$lib/assets/icons/brain.png';
	import biceps from '$lib/assets/icons/biceps.png';
	import walkingBoot from '$lib/assets/icons/walking-boot.png';
	import spikes from '$lib/assets/icons/spikes.png';

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
			{#if attribute === ATTRIBUTES.void}
			 <div class="void">
				<img src={spikes} alt="spiky star" />
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
	main>div {
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
  .void {
    	background-color: #9b9b9b;
  }
</style>
