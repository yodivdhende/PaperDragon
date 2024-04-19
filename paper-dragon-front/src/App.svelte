<script lang="ts">
  import Card from "./components/card-templates/card.svelte";
  import {
    handleAuthClick,
    handleSignoutClick,
  } from "./services/spreadsheet.service";
</script>

<main>
  <div>
    <button id="authorize_button" on:click={handleAuthClick}>Authorize</button>
    <button id="signout_button" on:click={handleSignoutClick}>Sign Out</button>
  </div>
  <div class="card">
    <Card></Card>
  </div>
</main>

<style>
  main {
    display: grid;
    justify-content: center;
    align-content: center;
  }

  .card {
    --width: 500px;
    width: var(--width);
    height: calc(var(--width) * 1.39);
  }
</style>
