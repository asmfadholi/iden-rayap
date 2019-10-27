/* eslint-disable no-empty */
/* eslint-disable no-shadow,consistent-return,no-param-reassign */
// import axios from 'axios';
import apiCurrency from '@/services/ApiCurrency';
import Constant from '@/utils/constant';
// import Vue from 'vue';

const state = {
  // Set default state(s) here
  currency_state: {
    currency_list: null,
    base_currency: null,
  },
};

const getters = {
  // Change value of state(s) with getter
  currency_options(state) {
    if (state.currency_state.currency_list !== null) {
      const listCurrency = Constant.list_currencies.map((currency, index) => ({
        id: index,
        currency,
        value: Number(state.currency_state.currency_list[currency]).toFixed(10),
      }));
      return listCurrency;
    }
    return [];
  },

};

const mutations = {

  setCurrencyList(state, payload) {
    state.currency_state.currency_list = payload.rates;
  },

  setCurrencyBase(state, payload) {
    state.currency_state.base_currency = payload;
  },
};

const actions = {

  async getCurrencyList({ commit }) {
    try {
      const listCurrency = await apiCurrency.getCurrencyList();
      commit('setCurrencyList', listCurrency);
    } catch (err) {
      throw err;
    }
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
