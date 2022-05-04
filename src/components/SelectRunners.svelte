<script lang="ts">
	import SelectRunner from './SelectRunner.svelte';

	export let users;
	export let section;
</script>

<div class="runners">
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

<style type="text/scss">
	.runners {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
