import Vue from 'vue';
import Vuex from 'vuex';

// Modules import downhere
import StoreCurrency from './modules/StoreCurrency';


// Initialize vuex
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    // Include imported modules in here
    StoreCurrency,
  },
  strict: debug,
});
