export const getSectionStyle = (section, time: 'start' | 'end') => {
	if (section.startTime && !section.endTime && time === 'start') {
		return 'background-color: green;';
	}

	if (section.startTime && !section.endTime && time === 'end') {
		return ';';
	}

	if (section.startTime && section.endTime) {
		return 'background-color: grey;';
	}
};

export const driverSections = {
	laura: ['2', '14'],
	duncan: ['3', '6', '9'],
	ellie: ['2', '4', '7'],
	swails: ['5', '8', '10', '12'],
	ian: ['11', '13'],
	pk: ['15', '18', '20'],
	baron: ['16', '19'],
	terry: ['17']
};
