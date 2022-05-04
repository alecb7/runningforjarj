<script type="ts">
	import Select from 'svelte-select';
	export let selectedUser;
	export let users;
	export let sectionID;

	const url = import.meta.env.VITE_FETCH_URL;
	let selectedUserID = selectedUser?.userID || '';
	let sectionUserID = selectedUser?.sectionUserID || '';

	const colours = {
		'1': '#ff9900',
		'2': '#9900ff',
		'3': '#ff00ff',
		'4': '#4a86e8',
		'5': '#00ff00',
		'6': '#ffffff',
		'7': '#b7b7b7',
		'8': '#ff0000',
		'9': '#ffff00',
		'10': '#00ffff'
	};

	$: selectedColor = colours[selectedUserID];

	const addUserToSection = async (userID) => {
		const res = await fetch(`${url}/sections/users/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userID: userID,
				sectionID: sectionID
			})
		});

		const result = await res.json();
		sectionUserID = result.sectionUserID;
	};

	const deleteUserFromSection = async () => {
		const res = await fetch(`${url}/sections/users/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				sectionUserID: sectionUserID
			})
		});
	};

	const onChange = async (event) => {
		selectedUserID = event.detail.value;
		if (!!selectedUser.userID) {
			await deleteUserFromSection();
		}
		await addUserToSection(selectedUserID);
	};

	const mapToItem = (user) =>
		user ? { value: user.userID, label: user.name } : undefined;
</script>

<div class="select" style="--user-color:{selectedColor}">
	<Select
		on:select={onChange}
		items={users.map(mapToItem)}
		value={mapToItem(users.find((u) => u.userID === selectedUserID))}
		showIndicator
		isClearable={false}
	/>
</div>

<style type="text/scss">
	.select {
		--background: var(--user-color);
		color: black;
		width: 150px;
	}
</style>
