/* eslint-disable import/no-unresolved,import/first */

import { layout, VueExtendLayout } from 'vue-extend-layout';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Multiselect from 'vue-multiselect';
import stores from './stores/index';
import router from './router';
import Vuelidate from 'vuelidate';
import twinNum from 'vue-tween-number';
import { ClientTable } from 'vue-tables-2';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
};

// axios global
window.axios = require('axios');

Vue.use(VueExtendLayout);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(ClientTable);

Vue.component('vue-multiselect', Multiselect);
Vue.component('tween-num', twinNum);

// import this project scss
import './sass/main.scss';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'line-awesome/dist/css/line-awesome-font-awesome.min.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: stores,
    ...layout,
});
