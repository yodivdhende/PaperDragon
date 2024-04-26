<script lang="ts">
  import { CardTypes, type StatusCardData } from "./card-templates.type";

  export let data: StatusCardData = {
    template: CardTypes.status,
    name: "name",
    image: "test",
    id: "id",
    type: "type",
    effect: "effect",
  };
</script>

<main>
  <div class="name">{data.name}</div>
  <div class="image">{data.image}</div>
  <div class="effect">{data.effect}</div>
  <div class="id">{data.id}</div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    outline: 10px solid silver;
    border-radius: 20px;
    background-color: white;
    color: black;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 5fr 5fr 1fr;
    grid-template-areas:
      ". name   ."
      ". image ."
      "effect  effect effect "
      ".  . id";
  }
  .name {
    grid-area: name;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 2rem;
    font-weight: bolder;
    border-bottom: 3px solid black;
  }
  .image {
    grid-area: image;
    width: 100%;
    height: 100%;
    background-color: silver;
  }
  .effect {
    grid-area: effect;
    padding-top: 2rem;
  }
  .id {
    grid-area: id;
    display: grid;
    justify-content: end;
    align-content: end;
  }
</style>
