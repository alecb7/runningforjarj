<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch }) {
		const url = import.meta.env.VITE_FETCH_URL;
		console.log("pooo")
		const sectionId = params.sectionId;
		const response = await fetch(`${url}/sections/${sectionId}`);
		const section = await response.json();

		return {
			status: response.status,
			props: {
				section
			}
		};
	}
</script>

<script lang="ts">
	import { Icon } from '@smui/common';
	import { getColour } from '../../utils/colours';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';

	export let section;

	let {
		sectionID,
		startLocation,
		endLocation,
		distance,
		elevation,
		komootLink,
		users
	} = section;
</script>

<h1>{sectionID}</h1>

<div>
	<p>{startLocation} to {endLocation}</p>
	<p>{distance}k</p>
	<p>{elevation}m</p>
	<p>
		<a href={komootLink}>Komoot</a>
		<span>
			<Icon class="material-icons icon">open_in_new</Icon>
		</span>
	</p>
	{#each users as user}
		<p>
			<Button
				href={`/runner/${user.userID}`}
				class="runners-button"
				style="color: {getColour(user.userID)}"
				><Label>{user.userID}</Label>
			</Button>
		</p>
	{/each}
</div>
