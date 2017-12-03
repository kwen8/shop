
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import Vue from 'vue'

import App from './app.vue'
import iView from 'iview'
import jwtToken from './helpers/jwt'
import { router } from './router'
import store from './store'

axios.interceptors.request.use(function (config) {
    if(jwtToken.getToken()) {
        config.headers['Authorization'] = 'Bearer' + jwtToken.getToken()
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App)
})
