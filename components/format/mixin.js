export function getSubStr(value, zhLimit, enLimit) {
	let isEnglish = value.split(' ').length > 5;

	const length = isEnglish ? value.split(' ').slice(0, enLimit).join(' ').length : zhLimit;

	if (value.length > length) {
		return value.substring(0, length) + '......';
	} else {
		return value;
	}
}