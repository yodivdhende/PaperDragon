<script lang="ts">
  import Card from "./components/card-templates/card.svelte";
</script>

<main>
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
