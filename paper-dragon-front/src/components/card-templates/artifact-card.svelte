<script lang="ts">
  import { CardTypes, type ArtifactCardData } from "./card-templates.type";

  export let card: ArtifactCardData = {
    cardType: CardTypes.artifacts,
    name: "name",
    id: "id",
    actions: "3",
    mechanics: "mechanics",
  };
</script>

<main class="card">
  <div class="name">{card.name}</div>
  <div class="id">{card.id}</div>
  <div class="actions">{card.actions}</div>
  <div class="mechanics">{card.mechanics}</div>
</main>

<style>
  main {
    border-color: var(--background-color);
  }
</style>
