
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import { router } from './router';

import App from './app.vue';

import 'iview/dist/styles/iview.css';

import iView from 'iview';

Vue.use(iView)

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
