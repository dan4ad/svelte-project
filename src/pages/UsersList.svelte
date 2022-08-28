<script>
	import UserItem from '../components/UserItem.svelte';
	export let users;
</script>

{#each users as user}
	<UserItem {user} />
{/each}
