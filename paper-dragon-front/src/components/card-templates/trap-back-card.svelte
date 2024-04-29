<script lang="ts">
  import type { TrapBackCardData } from './card-templates.type';

  export let card: TrapBackCardData; 
</script>
<main>
  <div class="kost">{card.kost}</div>
</main>
<style>
  main {
    width: 100%;
    height: 100%;
    border: 10px solid purple;
    border-radius: 20px;
    background-color: white;
    color: black;
    display: grid;
    flex-direction: column;
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