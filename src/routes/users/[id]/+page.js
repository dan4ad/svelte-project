import { usersStore } from '@/store/users';
import {
	USERS_REQUEST_URL,
	ALBUMS_REQUEST_URL,
	PHOTOS_REQUEST_URL,
	POSTS_REQUEST_URL
} from '@/const';

export async function load({ params, fetch, url }) {
	if (!url.search) {
		url.searchParams.set('page', 'albums');
	}

	let user,
		albums,
		photos,
		posts = null;

	usersStore.subscribe(async (users) => {
		if (users) {
			user = users.find((el) => el.id === parseInt(params.id));
		}
	});

	if (!user) {
		const response = await fetch(USERS_REQUEST_URL + '/' + params.id);
		user = await response.json();
	}

	const albumsResponse = await fetch(ALBUMS_REQUEST_URL + '?userId=' + params.id);
	albums = await albumsResponse.json();
	const albumIds = albums.map((el) => el.id);

	const photosResponse = await fetch(PHOTOS_REQUEST_URL + '?albumIds=' + albumIds);
	photos = await photosResponse.json();

	const postsResponse = await fetch(POSTS_REQUEST_URL + '?userId=' + params.id);
	posts = await postsResponse.json();

	const photoByAlbums = albums.map((el) => {
		const albumId = el.id;
		const tempPhotos = photos.filter((el) => el.albumId === albumId);
		if (photos) {
			el.photos = tempPhotos;
			return el;
		}

		return el;
	});

	return {
		user,
		posts,
		photoByAlbums
	};
}
