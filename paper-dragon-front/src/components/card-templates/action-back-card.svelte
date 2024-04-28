<script lang="ts">
  import { CardTypes, type ActionBackCardData } from "./card-templates.type";

  export let card: ActionBackCardData;
</script>

<main>
  <div class="kost">{card.kost}</div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    outline: 10px solid black;
    border-radius: 20px;
    background-color: white;
    color: black;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  .kost {
    width: 200px;
    height: 200px;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: 4rem;
  }
</style>
