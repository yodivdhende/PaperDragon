<script lang="ts">
  import type { LocationCardData } from "./card-type.types";

  export let card: LocationCardData;
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="effect">{@html card.effect}</div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
    place-content: center;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 12fr 1fr;
    grid-template-areas:
      ". name ."
      "effect effect effect"
      ". . id";
  }
</style>
