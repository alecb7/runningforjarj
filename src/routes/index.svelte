<script lang="ts">
	import Button from '@smui/button';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button on:click={() => window.alert('hello')}>hello</Button>
<Button on:click={() => window.alert('hello')} color="secondary">secondary</Button>
