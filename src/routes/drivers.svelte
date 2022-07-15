<script>
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import { driverSections } from '../utils/sectionStyles';

	const names = Object.keys(driverSections);
</script>

<div class="wrapper">
	{#if !!names}
		{#each names as name}
			<Button href={`/drivers/${name}`}><Label>{name}</Label></Button>
		{/each}
	{/if}
</div>

<style>
	* :global(.icon) {
		font-size: 16px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	* :global(.runners-button) {
		width: initial;
		margin-bottom: 10px;
	}
</style>
