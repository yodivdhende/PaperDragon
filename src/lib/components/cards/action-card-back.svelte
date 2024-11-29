<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import type { ActionCardBackData } from './card-type.types';

	export let card: ActionCardBackData;
	export let canEdit: boolean = false;
</script>

<main class="card-back">
	<div class="card-back-kost">
		<CanEdit bind:value={card.kost} {canEdit} />
	</div>
</main>

<style>
	.card-back-kost {
		width: calc(200px * var(--scale));
		height: calc(200px * var(--scale));
		display: grid;
		justify-content: center;
		align-content: center;
		background-color: yellow;
		border-radius: 50%;
		font-size: calc(4rem * var(--scale));
	}
</style>
