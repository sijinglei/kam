import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'


// global.MintUI = require('mint-ui');
// require('mint-ui/lib/style.css');

Vue.use(MintUI);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './router/routes'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})
new Vue({
  el: '#app',
  router: router,
  render: function (h) {
    return h(App);
  }
})