<script lang="ts">
	import CanEdit from '../can-edit.svelte';
	import type { TrapCardData } from './card-type.types';

	export let card: TrapCardData;
	export let canEdit: boolean;
</script>

<main class="card-back">
	<div class="card-back-kost">
		<CanEdit bind:value={card.kost} {canEdit} />
	</div>
</main>

<style>
</style>
