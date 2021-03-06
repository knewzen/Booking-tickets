
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');

window.axios = require('axios');

// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('sector', require('./components/Sector.vue'));
Vue.component('modal', require('./components/Modal.vue'));

// Vue.component('example-component', require('./components/ExampleComponent.vue'));


const app = new Vue({
    el: '#places',
    data: {
        showModal: false,
        place: '',
    }
});