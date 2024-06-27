<script lang="ts">
</script>
<main>
    <section>
        <slot name="section" />
    </section> 
    <aside>
        <slot name="aside" />
    </aside>
</main>
<style>
    main {
        display:flex;
        flex-direction: row;
    }
    section {
        width:100%;
        background-color:var(--color-background);
    }
    aside {
        max-width: 500px;
        border: 1px solid var(--color-gray) ;
    } 
</style>