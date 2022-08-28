<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import UserProfile from '@/components/user/UserProfile.svelte';
	import UserAlbums from '@/components/user/UserAlbums.svelte';
	import UserPosts from '../../../components/UserPosts.svelte';
	
	export let data;

	const user = data.user;
	const photoByAlbums = data.photoByAlbums;
	const posts = data.posts;

	let showAlbuns;

	function toggleBlock(ev) {
		const target = ev.target;
		const switchType = target.getAttribute('switch-type');
		if (!switchType) {
			return;
		}

		$page.url.searchParams.set('page', switchType);
		goto($page.url.search);
	}

	afterNavigate(({ to }) => {
		if (!to.search) {
			to.searchParams.set('page', 'albums');
			goto(to.search);
		}

		showAlbuns = $page.url.searchParams.get('page') == 'albums'
	});
</script>

<div class="block">
	<UserProfile {user} />
</div>

<div class="switcher" on:click={toggleBlock}>
	<span switch-type="albums">Albums</span>
	<span switch-type="posts">Posts</span>
</div>

{#if showAlbuns}
	<UserAlbums {photoByAlbums} />
{:else}
	<UserPosts {posts} />
{/if}

<style lang="scss">
	.block {
		margin-bottom: 40px;
		box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 7%);
	}
	.switcher {
		padding: 24px;
		border-radius: 10px;
		background-color: #7fc7ff;
		text-align: center;
		margin-bottom: 40px;
		color: #ffffff;

		span {
			margin: 0 20px;
			cursor: pointer;

			&:hover {
				color: #42ab44;
			}
		}
	}
</style>
