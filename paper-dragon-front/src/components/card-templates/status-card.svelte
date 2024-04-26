<script lang="ts">
  import { CardTypes, type StatusCardData } from "./card-templates.type";

  export let data: StatusCardData = {
    cardType: CardTypes.status,
    name: "name",
    image: "test",
    id: "id",
    type: "type",
    effect: "effect",
  };
</script>

<main class="card">
  <div class="name">{data.name}</div>
  <div class="image">{data.image}</div>
  <div class="effect">{data.effect}</div>
  <div class="id">{data.id}</div>
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
