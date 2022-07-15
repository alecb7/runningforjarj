<script type="ts">
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import { updateSections } from '../utils/pace';
	import moment from 'moment';
	import { driverSections, getSectionStyle } from '../utils/sectionStyles';

	const url = import.meta.env.VITE_FETCH_URL;

	export let driver: string;
	let sections;

	onMount(async () => {
		const response = await fetch(`${url}/sections`);

		const sectionsRes = await response.json();

		sections = updateSections(sectionsRes);
		sections = sections.filter((s) =>
			driverSections[driver].includes(s.sectionID)
		);
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

<h1 class="driver">{driver}</h1>

<DataTable table$aria-label="Section list" style="width: 100%">
	<Body>
		{#if !!sections}
			{#each sections as section (section.sectionID)}
				<Row>
					<Cell
						><Button href={`/section/${section.sectionID}`} variant="raised"
							><Label>{section.sectionID}</Label>
						</Button></Cell
					>
					<Cell style={`${getSectionStyle(section, 'start')}`}
						>{getStartTime(section)?.format('ddd H:mma')}</Cell
					><Cell style={`${getSectionStyle(section, 'end')}`}>
						{getEndTime(section)?.format('ddd H:mma')}
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
	@keyframes pulse {
		0% {
			background-color: #81c784;
		}
		100% {
			background-color: #388e3c;
		}
	}
	.driver {
		text-transform: capitalize;
	}
</style>
