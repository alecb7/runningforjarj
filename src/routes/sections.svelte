<script lang="ts">
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import SelectRunners from '../components/SelectRunners.svelte';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import { updateSections } from '../utils/pace';
	import moment from 'moment';
	import { getSectionStyle } from '../utils/sectionStyles';

	const url = import.meta.env.VITE_FETCH_URL;

	let sections;
	let users;

	onMount(async () => {
		const response = await fetch(`${url}/sections`);
		const userResponse = await fetch(`${url}/users`);

		const sectionsRes = await response.json();
		users = await userResponse.json();

		sections = updateSections(sectionsRes);
	});

	const getStartTime = (section) => {
		if (section.estimatedStartTime) {
			return section.estimatedStartTime;
		}

		return moment(section.startTime);
	};

	const getEndTime = (section) => {
		if (section.estimatedEndTime) {
			return section.estimatedEndTime;
		}

		return moment(section.endTime);
	};
</script>

<h1>Sections</h1>

<DataTable table$aria-label="Section list">
	<Body>
		{#if !!sections && !!users}
			{#each sections as section (section.sectionID)}
				<Row>
					<Cell
						><Button href={`/section/${section.sectionID}`} variant="outlined"
							><Label>{section.sectionID}</Label>
						</Button></Cell
					>
					<Cell>{section.startLocation} - {section.endLocation}</Cell>
					<Cell style={`${getSectionStyle(section, 'start')}`}
						>{getStartTime(section)?.format('ddd H:mma')} - {getEndTime(
							section
						)?.format('ddd H:mma')}</Cell
					>
					<Cell style={`${getSectionStyle(section, 'start')}; overflow:visible`}
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
