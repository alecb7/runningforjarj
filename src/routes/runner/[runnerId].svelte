<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch }) {
		const url = import.meta.env.VITE_FETCH_URL;
		const runnerId = params.runnerId;
		const response = await fetch(`${url}/users/${runnerId}`);
		const user = await response.json();

		const sectionsResponse = await fetch(`${url}/sections`);
		const sections = await sectionsResponse.json();

		const userSections = sections
			.filter((section) => section.users.some((u) => u.userID === user.userID))
			.sort((a, b) => parseInt(a.sectionID) - parseInt(b.sectionID));

		return {
			status: response.status,
			props: {
				user,
				userSections,
				sections
			}
		};
	}
</script>

<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { Icon } from '@smui/common';
	import { getColour } from '../../utils/colours';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import moment from 'moment';
	import { getSectionStyle } from '../../utils/sectionStyles';

	const url = import.meta.env.VITE_FETCH_URL;

	export let user;
	export let userSections;
	export let sections;

	const getPartner = (sectionID) => {
		const section = sections.find((s) => s.sectionID === sectionID);
		const partner = section.users.find((u) => u.userID !== user.userID);
		return partner;
	};

	const sum = (array) => {
		return array.reduce((a, b) => ({ distance: a.distance + b.distance }));
	};
</script>

<h1 style={`color: ${getColour(user.userID)}`}>{user.name}</h1>

<DataTable table$aria-label="Section list">
	<Body>
		{#if !!userSections && !!user}
			{#each userSections as section (section.sectionID)}
				{@const partner = getPartner(section.sectionID)}
				<Row>
					<Cell
						><Button href={`/section/${section.sectionID}`} variant="raised"
							><Label>{section.sectionID}</Label>
						</Button></Cell
					>
					<Cell>{section.startLocation} to {section.endLocation}</Cell>
					<Cell numeric>{section.distance}k</Cell>
					<Cell
						><Button
							href={`/runner/${partner.userID}`}
							class="runners-button"
							style="color: {getColour(partner.userID)}"
							><Label>{partner.name}</Label>
						</Button></Cell
					>
					{#if section.startTime}
						<Cell style={`${getSectionStyle(section, 'start')}`}
							>{moment(section.startTime).format('dddd: h:mmA')}</Cell
						>
					{/if}
					{#if section.endTime}
						<Cell style={`${getSectionStyle(section, 'end')}`}
							>{moment(section.endTime).format('dddd: h:mmA')}</Cell
						>
					{/if}
				</Row>
			{/each}
		{/if}
		<Row>
			<Cell>Sections: {userSections.length}</Cell>
			<Cell numeric>{sum(userSections).distance.toFixed(2)}k</Cell>
		</Row>
	</Body>
</DataTable>
