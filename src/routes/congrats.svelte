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
	}

	img {
		height: 75vh;
	}
</style>
