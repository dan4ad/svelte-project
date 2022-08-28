import { USERS_REQUEST_URL } from '@/const';

export async function load({ fetch }) {
	let users = [];
	try {
		const response = await fetch(USERS_REQUEST_URL);
		users = await response.json();
	} catch (e) {
		console.log(e);
	}

	return {
		users
	};
}
