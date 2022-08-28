import { USERS_REQUEST_URL } from '@/const';
import { usersStore } from '@/store/users';

export async function load({ fetch }) {
	let users = [];
	try {
		const response = await fetch(USERS_REQUEST_URL);
		users = await response.json();
	} catch (e) {
		console.log(e);
	}

	usersStore.set(users)
	
	return {
		users
	};
}
