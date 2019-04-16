import axios from 'axios';
import Vue from 'vue';

const api = {
  'page': function (pageId) {
    return axios.get('/api/page/:' + pageId);
  },
  'section': function (sectionId) {
    return axios.get('/api/section/:' + sectionId)
  },
  'format': function (formatId) {
    return axios.get('/api/format/:' + formatId)
  },
  'collaction': function (collactionId) {
    return axios.get('/api/section/:' + collactionId + '/collaction')
  }
}

Vue.prototype.$api = api;