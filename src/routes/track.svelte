<script lang="ts">
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import { updateSections } from '../utils/pace';
	import moment from 'moment';
	import { getSectionStyle } from '../utils/sectionStyles';
	import { getColour } from '../utils/colours';

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

<h1>Track</h1>

<DataTable table$aria-label="Section list">
	<Body>
		{#if !!sections && !!users}
			{#each sections as section (section.sectionID)}
				<Row>
					<Cell>{section.startLocation} - {section.endLocation}</Cell>
					<Cell style={`${getSectionStyle(section, 'start')}`}
						>{getStartTime(section)?.format('ddd H:mma')} - {getEndTime(
							section
						)?.format('ddd H:mma')}</Cell
					>
					<Cell
						style={`${getSectionStyle(section, 'start')}; overflow:visible`}
					>
						{#if section.sectionID === '21'}
							All
						{:else}
							{#each section.users as user}
								<Button style="color: {getColour(user.userID)}" disabled
									><Label>{user.name}</Label>
								</Button>
							{/each}
						{/if}
					</Cell>
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
