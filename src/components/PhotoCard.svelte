<script>
	import { onMount, onDestroy } from 'svelte';

	export let photo;

	let observer = null;
	let intersected = false;

	let image;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				const image = entries[0];
				if (image.isIntersecting) {
					intersected = true;
					observer.disconnect();
				}
			},
			{ rootMargin: '100px' }
		);

		observer.observe(image);
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});

	$: srcImage = intersected ? photo.thumbnailUrl : ''
    $: srcSetImage = intersected ? photo.url : ''
</script>

<div class="photo-card">
	<img bind:this={image} class="photo-card--image" src={srcImage} alt="" srcset={srcSetImage} />
	<div class="photo-card--title">
		<span>{photo.title}</span>
	</div>
</div>

<style lang="scss">
	.photo-card {
		box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 7%);
		padding: 16px;
        height: 100%;

		&--image {
			width: 200px;
			height: 170px;
			margin-bottom: 12px;
		}
	}
</style>
