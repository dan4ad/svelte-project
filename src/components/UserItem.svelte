<script>
	export let user;
</script>

<div class="user-item">
	<span>{user.id}</span>
	<span>{user.name}</span>
</div>

<style lang="scss">
	.user-item {
		display: flex;
		font-size: 16px;
		cursor: pointer;

		span {
			margin-right: 5px;
		}
		&:hover {
			color: green;
		}
	}
</style>
