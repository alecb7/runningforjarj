<script lang="ts">
	import { onMount } from 'svelte';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, {
		Row,
		Section,
		Title,
		AutoAdjust
	} from '@smui/top-app-bar';
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
		<link
			rel="stylesheet"
			href="/smui.css"
			media="(prefers-color-scheme: light)"
		/>
		<link
			rel="stylesheet"
			href="/smui-dark.css"
			media="screen and (prefers-color-scheme: dark)"
		/>
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
			<!-- <IconButton class="material-icons">menu</IconButton> -->
			<Title>Running for Jarj</Title>
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
<AutoAdjust {topAppBar}
	><LayoutGrid
		style="max-width: 1080px; 
	margin: 0 auto !important;"
		><Cell span={12}
			><div class="mdc-typography--body1" style="justify-content: center;">
				<slot />
			</div></Cell
		></LayoutGrid
	></AutoAdjust
>

<style type="text/scss">
	// Import all the styles for the classes.
	@use '@material/typography/mdc-typography';
	// The following classes become available:
	//   mdc-typography--headline1
	//   mdc-typography--headline2
	//   mdc-typography--headline3
	//   mdc-typography--headline4
	//   mdc-typography--headline5
	//   mdc-typography--headline6
	//   mdc-typography--subtitle1
	//   mdc-typography--subtitle2
	//   mdc-typography--body1
	//   mdc-typography--body2
	//   mdc-typography--caption
	//   mdc-typography--button
	//   mdc-typography--overline
	//   mdc-typography--body1

	// Import the mixins.
	@use '@material/typography/index' as typography;

	//
	// Some defaults that may be helpful to you.
	// If you just want to use these, and not the classes, you can instead just
	// @use '@material/typography/index' as typography, and your CSS file will be smaller.
	//
	html {
		@include typography.typography('body1');
	}

	h1 {
		@include typography.typography('headline1');
	}

	h2 {
		@include typography.typography('headline2');
	}

	h3 {
		@include typography.typography('headline3');
	}

	h4 {
		@include typography.typography('headline4');
	}

	h5 {
		@include typography.typography('headline5');
	}

	h6 {
		@include typography.typography('headline6');
	}

	caption {
		@include typography.typography('caption');
	}

	code,
	pre {
		font-family: 'Roboto Mono', monospace;
	}

	small {
		font-size: 0.9em;
	}

	big {
		font-size: 1.1em;
	}

	b,
	strong {
		font-weight: bold;
	}
</style>
