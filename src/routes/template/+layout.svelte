<script lang="ts">
    import CardSideSelector from '$lib/components/selectors/card-side-selector.svelte'
</script>
<main>
    <div>
        <slot />
    </div>
    <div class="settings">
        <CardSideSelector />
    </div>
</main>
<style>
    main {
        display:flex;
        flex-direction: row;
    }
    .settings {
        max-width: 500px;
        border: 1px solid var(--color-gray) ;
    } 
</style>