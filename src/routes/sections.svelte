<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ fetch }) {
		const url = import.meta.env.VITE_FETCH_URL;
		const response = await fetch(`${url}/sections`);
		const userResponse = await fetch(`${url}/users`);

		return {
			status: response.status,
			props: {
				sections: response.ok && (await response.json()),
				users: userResponse.ok && (await userResponse.json())
			}
		};
	}
</script>

<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { Icon } from '@smui/common';
	import SelectRunners from '../components/SelectRunners.svelte';

	export let sections;
	export let users;

	sections.sort((a, b) => parseInt(a.sectionID) - parseInt(b.sectionID));
</script>

<DataTable table$aria-label="Section list">
	<Head>
		<Row>
			<Cell>ID</Cell>
			<Cell>Start Location</Cell>
			<Cell>End Location</Cell>
			<Cell numeric>Distance</Cell>
			<Cell numeric>Elevation</Cell>
			<Cell>Komoot</Cell>
			<Cell>Runners</Cell>
		</Row>
	</Head>
	<Body>
		{#each sections as section (section.sectionID)}
			<Row>
				<Cell>{section.sectionID}</Cell>
				<Cell>{section.startLocation}</Cell>
				<Cell>{section.endLocation}</Cell>
				<Cell numeric>{section.distance}k</Cell>
				<Cell numeric>{section.elevation}m</Cell>
				<Cell
					><a href={section.komootLink}>Komoot</a>
					<span>
						<Icon class="material-icons icon">open_in_new</Icon>
					</span></Cell
				>
				<Cell style="overflow:visible"><SelectRunners {users} {section} /></Cell
				>
			</Row>
		{/each}
	</Body>
</DataTable>

<style>
	* :global(.icon) {
		font-size: 16px;
	}
</style>
