import axios from './axios';

export default {
	'getSectionInfo': function (id) {
		return axios.get(`/app/section/${id}`);
	}
};