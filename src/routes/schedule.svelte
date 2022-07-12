<script lang="ts">
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import { updateSections } from '../utils/pace';
	import moment from 'moment';

	const url = import.meta.env.VITE_FETCH_URL;

	let sections;

	onMount(async () => {
		const response = await fetch(`${url}/sections`);

		const sectionsRes = await response.json();

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

		return moment(section.EndTime);
	};

	const getStartClass = (section) => {
		if (section.startTime && !section.endTime) {
			return 'active';
		}

		if (section.startTime && section.endTime) {
			return 'completed';
		}
	};
</script>

<h1>Schedule</h1>

<DataTable table$aria-label="Section list" style="width: 100%">
	<Body>
		{#if !!sections}
			{#each sections as section (section.sectionID)}
				<Row>
					<Cell 
						><Button class="button" href={`/section/${section.sectionID}`} variant="raised"
							><Label>{section.sectionID}</Label>
						</Button></Cell
					>
					<Cell class="completed">{getStartTime(section)?.format('ddd H:mma')}</Cell><Cell class="active">
						{getEndTime(section)?.format('ddd H:mma')}
					</Cell>
				</Row>
			{/each}
		{/if}
	</Body>
</DataTable>

<style type="text/scss">
    * :global(.completed) {
		background-color: grey;
	}

    * :global(.active) {
		background-color: green;
    }

	@keyframes pulse {
		0% {
			background-color: #81c784;
		}
		100% {
			background-color: #388e3c;
		}
	}
</style>
