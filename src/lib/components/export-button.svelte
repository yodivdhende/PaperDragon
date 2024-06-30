<script lang="ts">
	import { exportAll } from "$lib/services/export-deck.service";
</script>
<main>
    <button on:click={() => exportAll()}>export</button>
</main>