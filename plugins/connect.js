import axios from 'axios';
import Vue from 'vue';

const api = {
  'page': function (pageId) {
    return axios.get('/api/page/:' + pageId);
  }
}

Vue.prototype.$api = api;