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

export const getColour = (userId: string) => {
	return colours[userId];
};
