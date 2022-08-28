<script>
	export let posts;
</script>

<div class="posts">
	{#each posts as post}
		<div class="post">
			<div class="post--title">
				<h3>{post.title}</h3>
			</div>
			<div class="post--body">
				<span>{post.body}</span>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.post {
		margin-bottom: 20px;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 20%);

		&--body {
			font-size: 16px;
		}
	}
</style>
