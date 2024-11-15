<script lang="ts">
	import Attributes from '../card-sections/attributes/attributes.svelte';
	import Value from '../value.svelte';
	import { type AttackCardData } from './attack-card.type';

	export let card: AttackCardData;
</script>

<main class="card">
	<div class="kost">
		<Value bind:value={card.kost} />
	</div>
	<div bind:innerHTML={card.name} contenteditable="true" class="name">{card.name}</div>
	<div class="damage">
		<Value bind:value={card.damage} />
		{@html card.damageType}
	</div>
	<div bind:innerHTML={card.attackType} contenteditable="true" class="type">
		{card.attackType}
	</div>
	<div bind:innerHTML={card.effect} contenteditable="true" class="effect">{@html card.effect}</div>
	<div class="attributes">
		<Attributes {card}></Attributes>
	</div>
	<div class="id">{card?.id}</div>
</main>

<style>
	main {
		border-color: var(--border-color);
		place-content: center;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
		grid-template-areas:
			'kost name .'
			'damage type .'
			'damageType . .'
			'effect effect effect '
			'. attributes id';
	}
</style>
