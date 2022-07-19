<script>
	import { base } from '$app/paths';
</script>

<div class="container">
	<h1>CONGRATS EVERYONE!!!</h1>

	<img src={`${base}/pudding.gif`} alt="pudding" />
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: url('https://media.giphy.com/media/PMV7yRpwGO5y9p3DBx/giphy.gif');
	}

	img {
		height: 75vh;
	}
</style>
