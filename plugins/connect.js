import axios from 'axios';
import Vue from 'vue';

const api = {
  // testData: function () {
  //   return axios.get('/api/page')
  //   .then(res => {
  //     // return res
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
};

Vue.prototype.$api = api;