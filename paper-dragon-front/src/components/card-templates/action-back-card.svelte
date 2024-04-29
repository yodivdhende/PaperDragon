<script lang="ts">
  import type { ActionCardBackData } from "./card-type.types";

  export let card: ActionCardBackData;
</script>

<main>
  <div class="kost">{card.kost}</div>
</main>

<style>
  main {
    --border-size: 10px;
    width: calc(100% - var(--border-size));
    height: calc(100% - var(--border-size));
    outline: var(--border-size) solid black;
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
