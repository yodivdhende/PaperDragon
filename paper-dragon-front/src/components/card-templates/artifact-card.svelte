<script lang="ts">
  import { CardTypes, type ArtifactCardData } from "./card-templates.type";

  export let card: ArtifactCardData;
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="actions">{card.actions}</div>
  <div class="effect">{card.mechanics}</div>
  <div class="id">{card.id}</div>
</main>

<style>
  main {
    border-color: var(--background-color);
    place-content: center;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 12fr  1fr;
    grid-template-areas:
      "actions name ."
      ". effect . "
      ". . id";
  }
</style>
