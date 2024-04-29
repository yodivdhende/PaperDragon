<script lang="ts">
  import { type StatusCardData } from "./card-templates.type";

  export let card: StatusCardData ;
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="image">{card.image}</div>
  <div class="effect">{card.effect}</div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--border-color);
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 5fr 5fr 1fr;
    grid-template-areas:
      ". name   ."
      ". image ."
      "effect  effect effect "
      ".  . id";
  }
</style>
