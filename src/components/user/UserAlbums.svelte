<script>
	import PhotoCard from '../PhotoCard.svelte';
	export let photoByAlbums;
</script>

{#each photoByAlbums as album}
	<div class="albums-wrap">
		<div class="albums">
			<div class="albums--title">
				<span
					>{album.id} Album -
					<span class="albums--title--second-title">{album.title}</span>
				</span>
			</div>
		</div>

		<div class="photos">
			{#each album.photos as photo}
				<div class="photo-card">
					<PhotoCard {photo} />
				</div>
			{/each}
		</div>
	</div>
{/each}

<style lang="scss">
	.albums-wrap {
		margin-bottom: 40px;
        box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 7%);
	}
	.albums {
		padding: 40px 40px 0;

		&--title {
			display: flex;
			font-size: 28px;
			margin-bottom: 20px;

			&--second-title {
				color: #7fc7ff;
			}
		}
	}
	.photos {
		padding: 0 40px 40px;
		display: flex;
		overflow-x: scroll;
	}
	.photo-card {
		&:not(:last-child) {
			margin-right: 12px;
			margin: 10px;
		}
	}
</style>
