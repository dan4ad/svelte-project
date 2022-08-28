<script>
	import '@/assets/app.scss';
	import { afterNavigate } from '$app/navigation';

	$: routes = [
		{ id: 0, name: 'Main', path: '/', active: false },
		{ id: 1, name: 'Users', path: '/users', active: false },
		{ id: 2, name: 'User Profile', path: '/profile', active: false }
	];

	afterNavigate(({ to }) => {
		const pathname = to.pathname;
		routes = routes.map((el) => {
			if (el.path === pathname) {
				el.active = true;
				return el;
			}

			el.active = false;
			return el;
		});
	});
</script>

<nav class="nav-bar">
	{#each routes as route}
		<a href={route.path} key={route.id} class={route.active ? 'active-path' : ''}>{route.name}</a>
	{/each}
</nav>

<main class="main-container">
	<slot />
</main>

<style style="scss">
	.nav-bar {
		display: flex;
		justify-content: center;
		background-color: #7fc7ff;
		padding: 32px 80px;
		box-shadow: 0px 1px 16px 2px rgb(0 0 0 / 20%);
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-size: 16px;
		font-weight: 600;
	}

	a:not(:last-child) {
		margin-right: 28px;
	}

	a:hover {
		color: #42ab44;
	}
	.main-container {
		padding: 40px 80px;
	}
	.active-path {
		color: #42ab44;
	}
</style>
