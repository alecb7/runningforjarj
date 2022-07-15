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