<script lang="ts">
  import Attributes from '../card-sections/attributes/attributes.svelte';
import type { TrapCardData } from './card-templates.type';

  export let card: TrapCardData;
</script>
<main class="card">
    <div class="name">{card.name}</div>
    <div class="kost">{card.kost}</div>
    <div class="effect">{card.effect}</div>
    <div class="attributes">
      <Attributes {card}/>
    </div>
    <div class="id">{card.id}</div>
</main>
<style>
  main {
    border-color: var(--border-color);
    place-content: center;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 1fr 1fr 10fr 1fr;
    grid-template-areas:
      "kost name ."
      ". type ."
      "effect effect effect "
      ". attributes id";
  }
</style>