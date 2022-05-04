<script lang="ts">
	import SelectRunner from './SelectRunner.svelte';

	export let users;
	export let section;
</script>

<div>
	<SelectRunner
		{users}
		selectedUser={section.users[0] || {}}
		sectionID={section.sectionID}
	/>
	<SelectRunner
		{users}
		selectedUser={section.users[1] || {}}
		sectionID={section.sectionID}
	/>
</div>

<style>
</style>
