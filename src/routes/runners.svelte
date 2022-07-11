<script lang="ts">
	import { onMount } from 'svelte';
	import Button, { Label } from '@smui/button';
	import { getColour } from '../utils/colours';

	const url = import.meta.env.VITE_FETCH_URL;

	let users;

	onMount(async () => {
		const userResponse = await fetch(`${url}/users`);

		users = await userResponse.json();
	});
</script>

<div class="wrapper">
	{#if !!users}
		{#each users as user (user.userID)}
			<Button
				href={`/runner/${user.userID}`}
				class="runners-button"
				style="color: {getColour(user.userID)}"
				><Label>{user.name}</Label>
			</Button>
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
