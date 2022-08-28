<script>
	export let user;

	const PATH_TO_USER_PROFILE = '/users';
</script>

<a href={`${PATH_TO_USER_PROFILE}/${user.id}`} class="user-item">
	<span>{user.id}</span>
	<span>{user.name}</span>
</a>

<style lang="scss">
	.user-item {
		display: flex;
		font-size: 16px;
		cursor: pointer;
		text-decoration: none;
		color: #1c1c1c;
		padding: 12px;

		span {
			margin-right: 5px;
		}
		&:hover {
			color: #42ab44;
		}
	}
</style>
