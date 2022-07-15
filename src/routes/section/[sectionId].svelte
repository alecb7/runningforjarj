<script context="module">
	/** @type {import('./[slug]').Load} */
	export async function load({ params, fetch }) {
		const url = import.meta.env.VITE_FETCH_URL;
		const sectionId = params.sectionId;

		const response = await fetch(`${url}/sections`);
		const sectionsRes = await response.json();

		const sections = updateSections(sectionsRes);

		const section = sections.find((s) => s.sectionID === sectionId);
		const previousSection =
			sectionId > 1
				? sections.find((s) => s.sectionID === `${parseInt(sectionId) - 1}`)
				: {};

		let canStart =
			(!!previousSection.startTime && !section.startTime) ||
			(sectionId === '1' && !section.startTime);

		return {
			status: response.status,
			props: {
				section,
				sectionId,
				canStart
			}
		};
	}
</script>

<script lang="ts">
	import { getColour } from '../../utils/colours';
	import Button from '@smui/button';
	import { Label } from '@smui/common/elements';
	import moment from 'moment';
	import { updateSections } from '../../utils/pace';

	const url = import.meta.env.VITE_FETCH_URL;

	export let section;
	export let sectionId;
	export let canStart;

	let loading;

	const start = async () => {
		loading = true;
		const newStartTime = moment().toISOString();
		const res = await fetch(`${url}/sections/start`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				sectionID: sectionId,
				startTime: newStartTime
			})
		});

		loading = false;
	};
</script>

<div class="title-container">
	<h1>{section.startLocation} to {section.endLocation}</h1>
	{#if section.startTime && !section.endTime}
		<div class="ring-container">
			<div class="ringring" />
			<div class="circle" />
		</div>
	{/if}
</div>

<p>Runners:</p>
<div class="runners">
	{#each section.users as user}
		<p class="runner">
			<Button
				href={`/runner/${user.userID}`}
				class="runners-button"
				style="background-color: {getColour(user.userID)}; color: black"
				variant="outlined"
				><Label>{user.name}</Label>
			</Button>
		</p>
	{/each}
</div>
{#if section.startTime}
	<p>Started: {moment(section.startTime).format('dddd: h:mma')}</p>
{:else if canStart}
	<Button
		disabled={loading}
		class="start-button"
		variant="raised"
		on:click={start}><Label>START</Label></Button
	>
{/if}
{#if section.endTime}
	<p>Ended: {moment(section.endTime).format('ddd: h:mma')}</p>
{/if}

{#if section.estimatedStartTime}
	<p>
		Estimated start: {moment(section.estimatedStartTime).format('ddd: h:mma')}
	</p>
{/if}
{#if section.estimatedEndTime}
	<p>Estimated end: {moment(section.estimatedEndTime).format('ddd: h:mma')}</p>
{/if}
{#if sectionId !== '1'}
	<Button href={`/section/${parseInt(sectionId) - 1}`} variant="outlined"
		><Label>Previous Section</Label>
	</Button>
{/if}
{#if sectionId !== '21'}
	<Button href={`/section/${parseInt(sectionId) + 1}`} variant="outlined"
		><Label>Next Section</Label>
	</Button>
{/if}

<style type="text/scss">
	.title-container {
		display: flex;
		width: 100%;
		position: relative;
	}

	.runners {
		display: flex;
		justify-content: flex-start;
	}
	.runner {
		margin-right: 5px;
		margin-top: 0;
	}

	.ring-container {
		position: relative;
		right: 40px;
	}

	.circle {
		width: 15px;
		height: 15px;
		background-color: #62bd19;
		border-radius: 50%;
		position: absolute;
		top: 23px;
		left: 23px;
	}

	.ringring {
		border: 3px solid #62bd19;
		-webkit-border-radius: 30px;
		height: 25px;
		width: 25px;
		position: absolute;
		left: 15px;
		top: 15px;
		-webkit-animation: pulsate 1s ease-out;
		-webkit-animation-iteration-count: infinite;
		opacity: 0;
	}
	@-webkit-keyframes pulsate {
		0% {
			-webkit-transform: scale(0.1, 0.1);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(1.2, 1.2);
			opacity: 0;
		}
	}
</style>
