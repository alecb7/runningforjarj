<script lang="ts">
	import { onMount } from 'svelte';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	let topAppBar: TopAppBarComponentDev;

	let darkTheme: boolean | undefined = undefined;

	onMount(() => {
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if darkTheme === undefined}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="/smui.css" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<IconButton class="material-icons">menu</IconButton>
			<Title>Standard</Title>
		</Section>
		<Section align="end" toolbar>
			<IconButton
				class="material-icons"
				aria-label="Download"
				title={darkTheme ? 'Change to light mode' : 'Change to dark mode'}
				on:click={() => (darkTheme = !darkTheme)}
				>{darkTheme ? 'wb_sunny' : 'cloud'}
			</IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}><LayoutGrid><Cell><slot /></Cell></LayoutGrid></AutoAdjust>
