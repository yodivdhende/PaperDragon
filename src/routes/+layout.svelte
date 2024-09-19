<script>
	import '../app.css';
</script>

<main>
	<header>
		<nav>
			<a href="/decks">decks</a>
			<a href="/print/nosplit">All Cards</a>
			<a href="/print/split">All Cards split</a>
		</nav>
	</header>
	<slot />
</main>

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
