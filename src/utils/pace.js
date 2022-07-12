import moment from 'moment';

export const getEstimatedTime = (pace, distance, startTime) => {
	var time = moment.utc(pace, 'HH:mm:ss');
	const minutes = time.minutes() * distance;
	const seconds = time.seconds() * distance;

	const finishTime = moment(startTime)
		.add(minutes, 'm')
		.add(seconds, 's')
		.add(10, 'm');

	return finishTime;
};

export const updateSections = (sectionsRes) => {

	const sections = sectionsRes.sort(
		(a, b) => parseInt(a.sectionID) - parseInt(b.sectionID)
	);

	let previousEndTime;
	return sections.map((section, index) => {
		const { startTime, endTime, estimatedPace, distance } = section;
		let estimatedStartTime, estimatedEndTime;

		if(index === 0 && !startTime) {
			estimatedStartTime = moment("2022-07-16T04:00:00")
		}

		if (!startTime && index !== 0) {
			estimatedStartTime = previousEndTime;
		}

		if (!!startTime && !endTime) {
			estimatedEndTime = getEstimatedTime(estimatedPace, distance, startTime);
		}
		if (!startTime && !endTime) {
			estimatedEndTime = getEstimatedTime(
				estimatedPace,
				distance,
				estimatedStartTime
			);
		}

		previousEndTime = endTime || estimatedEndTime;

		return { ...section, estimatedEndTime, estimatedStartTime };
	});
};
