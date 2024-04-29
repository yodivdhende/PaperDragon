<script lang="ts">
  import type { TrapCardData } from "./card-type.types";

  export let card: TrapCardData;
</script>

<main>
  <div class="kost">{card.kost}</div>
</main>

<style>
  main {
    --border-size: 10px;
    width: calc(100% - var(--border-size));
    height: calc(100% - var(--border-size));
    border: var(--border-size) solid purple;
    border-radius: 20px;
    background-color: white;
    color: black;
    display: grid;
    place-content: center;
  }
  .kost {
    width: calc(200px * var(--scale));
    height: calc(200px * var(--scale));
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: yellow;
    border-radius: 50%;
    font-size: calc(4rem * var(--scale));
  }
</style>
