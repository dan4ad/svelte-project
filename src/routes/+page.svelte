<script>
	const gifUrls = [
		'https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif',
		'https://media.giphy.com/media/k0ijJhqrUP4T2EvmJ1/giphy.gif',
		'https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif',
		'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
		'https://media.giphy.com/media/4a5b4AH9TG7zEgsEEe/giphy.gif',
		'https://media.giphy.com/media/bYUbS6XYDi3Ze/giphy.gif',
		'https://media.giphy.com/media/JuFwy0zPzd6jC/giphy.gif',
		'https://media.giphy.com/media/7VpVFGMeMKzxGNn3M0/giphy.gif',
		'https://media.giphy.com/media/Rbt3HJ6pSpyco/giphy.gif',
		'https://media.giphy.com/media/gh5cT7QyWRW6zElM53/giphy.gif',
		'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif',
		'https://media.giphy.com/media/4bAEIAB84zPwc/giphy.gif'
	];
</script>

<div class="toto">
	<h1>Hello it is my first app on Svelte Kit</h1>

	<div class="gifs">
		{#each gifUrls as url}
			<img src={url} alt="" />
		{/each}
	</div>
</div>

<style lang="scss">
	.toto {
		h1 {
			font-size: 32px;
		}
	}
	.gifs {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 1fr 1fr 1fr;
		box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 20%);
		padding: 20px;
		background-color: #7fc7ff;

		img {
			width: 400px;
			height: 400px;
			transition-property: width, height;
			transition-duration: 1.2s;
			&:hover {
				width: 500px;
				height: 500px;
			}
		}
	}
</style>
