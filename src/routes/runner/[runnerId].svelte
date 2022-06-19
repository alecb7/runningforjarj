<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch }) {
		const url = import.meta.env.VITE_FETCH_URL;
		const runnerId = params.runnerId;
		const response = await fetch(`${url}/users/${runnerId}`);

		return {
			status: response.status,
			props: {
				user: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { Icon } from '@smui/common';
	import { onMount } from 'svelte';
	import { getColour } from '../../utils/colours';
import Button from '@smui/button';
import { Label } from '@smui/common/elements';

	const url = import.meta.env.VITE_FETCH_URL;

	export let user;
	let sections;
	let userSections;

	onMount(async () => {
		const sectionsResponse = await fetch(`${url}/sections`);
		sections = await sectionsResponse.json();

		userSections = sections
			.filter((section) => section.users.some((u) => u.userID === user.userID))
			.sort((a, b) => parseInt(a.sectionID) - parseInt(b.sectionID));
	});

	const getPartner = (sectionID) => {
		const section = sections.find((s) => s.sectionID === sectionID);
		const partner = section.users.find((u) => u.userID !== user.userID);
		return partner;
	};
</script>

<h1 style={`color: ${getColour(user.userID)}`}>{user.name}</h1>

<DataTable table$aria-label="Section list">
	<Head>
		<Row>
			<Cell>ID</Cell>
			<Cell>Start Location</Cell>
			<Cell>End Location</Cell>
			<Cell numeric>Distance</Cell>
			<Cell numeric>Elevation</Cell>
			<Cell>Komoot</Cell>
			<Cell>Partner</Cell>
		</Row>
	</Head>
	<Body>
		{#if !!userSections && !!user}
			{#each userSections as section (section.sectionID)}
				{@const partner = getPartner(section.sectionID)}
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
					<Cell
						><Button
							href={`/runner/${partner.userID}`}
							class="runners-button"
							style="color: {getColour(partner.userID)}"
							><Label>{partner.name}</Label>
						</Button></Cell
					>
				</Row>
			{/each}
		{/if}
	</Body>
</DataTable>
