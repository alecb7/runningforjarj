<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import SelectRunners from '../components/SelectRunners.svelte';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';

	const url = import.meta.env.VITE_FETCH_URL;

	let sections;
	let users;

	onMount(async () => {
		const response = await fetch(`${url}/sections`);
		const userResponse = await fetch(`${url}/users`);

		sections = await response.json();
		users = await userResponse.json();

		console.log(sections);

		sections.sort((a, b) => parseInt(a.sectionID) - parseInt(b.sectionID));
	});
</script>

<h1>Sections</h1>

<DataTable table$aria-label="Section list">
	<Body>
		{#if !!sections && !!users}
			{#each sections as section (section.sectionID)}
				<Row>
					<Cell
						><Button
							href={`/section/${section.sectionID}`}
							variant="outlined"
							><Label>{section.sectionID}</Label>
						</Button></Cell
					>
					<Cell>{section.startLocation} - {section.endLocation}</Cell>
					<Cell style="overflow:visible"
						><SelectRunners {users} {section} /></Cell
					>
				</Row>
			{/each}
		{/if}
	</Body>
</DataTable>

<style>
	* :global(.icon) {
		font-size: 16px;
	}
</style>
