/* eslint-disable no-empty */
/* eslint-disable no-shadow,consistent-return,no-param-reassign */
// import axios from 'axios';

const state = {
    // Set default state(s) here
    result_state: {
        result: null,
        check: false,
        reset: false,
    },
};

const getters = {
    // Change value of state(s) with getter

};

const mutations = {
    setResult(state, payload) {
        state.result_state.result = payload;
    },

    setResultReset(state, payload) {
        state.result_state[payload] = !state.result_state[payload];
        state.result_state.result = null;
    },
};

const actions = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};