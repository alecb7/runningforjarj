<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const url = import.meta.env.VITE_FETCH_URL;
		const runnerId = params.runnerId;
		const response = await fetch(`${url}/users/${runnerId}`);

		return {
			status: response.status,
			props: {
				runner: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	import Paper, { Title } from '@smui/paper';
	export let runner;
</script>

<Paper><Title>{runner.name}</Title></Paper>

<h5>{runner.name}</h5>
