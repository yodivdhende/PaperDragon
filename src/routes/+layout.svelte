<script>
import GoogleApi from '$lib/components/google-api.svelte';
    import '../app.css';
</script>
<main>
    <header>
        <nav>
            <a href="/template/main">Template</a>
            <a href="/deck/main">Deck</a>
            <a href="/alldecks/nosplit">All Cards</a>
            <a href="/alldecks/split">All Cards split</a>
        </nav>
    </header>
    <slot />
</main>
<GoogleApi />

<style>
   main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
   } 
   header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   }
   nav {
    display: flex;
    flex-direction: row;
   }
</style>