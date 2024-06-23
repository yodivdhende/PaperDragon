<script lang="ts">
	import { user } from "../server/auth";
</script>
<main>
    {#if $user}
        <slot user={$user} />
    {:else}
        <slot name="login" />
     {/if}
</main>
<style>
    main {
        margin:1em;
    }
</style>