<script type="ts">
	import Select, { Option } from '@smui/select';
	export let selectedUser;
	export let users;
	export let sectionID;

	const url = import.meta.env.VITE_FETCH_URL;
	let selectedUserID = selectedUser?.userID || '';

	const addUserToSection = async (userID) => {
		console.log(
			JSON.stringify({
				userID: userID,
				sectionID: sectionID
			})
		);
		const res = await fetch(`${url}/sections/users/add`, {
			method: 'POST',
			body: JSON.stringify({
				userID: userID,
				sectionID: sectionID
			})
		});
	};

	const deleteUserFromSection = async () => {
		const res = await fetch(`${url}/sections/users/delete`, {
			method: 'DELETE',
			body: JSON.stringify({
				sectionUserID: selectedUser.sectionUserID
			})
		});
	};

	const onChange = async () => {
		console.log({ selectedUserID });
		await addUserToSection(selectedUserID);
		if (selectedUser.userID) {
			await deleteUserFromSection();
		}
	};
</script>

<Select
	bind:value={selectedUserID}
	on:SMUISelect:change={onChange}
	label={`Runner`}
>
	{#each users as user}
		<Option value={user.userID}>{user.name}</Option>
	{/each}
</Select>
