<script>
	import UsersList from '@/components/user/UsersList.svelte';

	export let data;
</script>

<UsersList users={data.users} />
