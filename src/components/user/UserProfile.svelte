<script>
	export let user;
</script>

<div class="user-profile">
	<div class="user-profile--title">
		<span>User Profile - <span class="user-profile--title--second-title">{user.name}</span></span>
	</div>

	<div class="user-profile--data-wrap">
		<div class="user-profile--data-wrap--data">
			<span>
				<b>Username:</b>
				{user.username}
			</span>
		</div>

		<div class="user-profile--data-wrap--data">
			<span>
				<b>Email:</b> <a href={`mailto:${user.email}`}>{user.email}</a>
			</span>
		</div>

		<div class="user-profile--data-wrap--data">
			<span>
				<b>Phone:</b> <a href={`tel:${user.phone}`}>{user.phone}</a>
			</span>
		</div>

		<div class="user-profile--data-wrap--data">
			<span>
				<b>Website:</b>
				<a href={user.website}>{user.website}</a>
			</span>
		</div>

		<div class="user-profile--data-wrap--data">
			<span>
				<b>Address:</b>
				{user.address.zipcode +
					', ' +
					user.address.city +
					', ' +
					user.address.street +
					', ' +
					user.address.suite}
			</span>
		</div>

		<div class="user-profile--data-wrap--data">
			<span>
				<b>Company name:</b>
				{user.company.name}
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	.user-profile {
		padding: 40px;

		&--title {
			display: flex;
			font-size: 28px;
			margin-bottom: 20px;

			&--second-title {
				color: #7fc7ff;
			}
		}
		&--data-wrap {
			margin-left: 20px;
			font-size: 16px;

			&--data {
				display: flex;
				&:not(:last-child) {
					margin-bottom: 16px;
				}

				a {
					text-decoration: none;
					color: #42ab44;
				}
			}
		}
	}
</style>
