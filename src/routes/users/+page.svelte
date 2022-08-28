<script>
	import UsersList from '../../pages/UsersList.svelte';

	export let data;
</script>

<UsersList users={data.users} />
