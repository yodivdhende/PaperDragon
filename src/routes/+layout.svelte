<script>
	import '../app.css';
	import '$lib/assets/style/card.css';
</script>

<main>
	<header>
		<nav>
			<a href="/decks">decks</a>
			<a href="/cards">cards</a>
			<a href="/print/all">print all</a>
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
