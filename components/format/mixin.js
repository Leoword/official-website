export function getSubStr(value, zhLimit, enLimit) {
	if (!value) {
		return;
	}

	let isEnglish = value.split(' ').length > 15;

	const length = isEnglish ? value.split(' ').slice(0, enLimit).join(' ').length : zhLimit;
	if (value.length > length) {
		return value.substring(0, length) + '......';
	} else {
		return value;
	}
}