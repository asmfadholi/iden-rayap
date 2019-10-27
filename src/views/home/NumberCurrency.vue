<template>
  <div>
    <div class="title-currency">
      <i v-if="value"> {{ value.currency }} - {{ stand_for[value.currency] }} </i>
      <i v-else> Unknown Currency </i>
    </div>

    <b-row>
      <b-col class="main-currency">
        <vue-multiselect
          v-model="value"
          :options="currency_options"
          placeholder="Select one"
          label="currency"
          track-by="currency" />
      </b-col>
      <b-col cols="6">
        <b-form-group class="form-number">
          <b-form-input
            v-model.number="number"
            type="number"
            required
            placeholder="Enter Number" />
        </b-form-group>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Constant from '@/utils/constant';

export default {
  data() {
    return {
      number: 10,
      value: null,
      init: true,
    };
  },

  computed: {
    ...mapGetters('StoreCurrency', ['currency_options']),

    stand_for() {
      return Constant.detail_currencies;
    },
  },

  watch: {
    number(newVal) {
      this.$emit('numberData', newVal);
    },

    currency_options(newVal) {
      if (this.init === true && newVal.length > 0) {
        const findInitUSD = newVal.filter(dataInit => dataInit.currency === 'USD');
        this.init = false;
        this.value = findInitUSD[0];
      }
    },

    value(newVal) {
      this.$store.commit('StoreCurrency/setCurrencyBase', newVal);
      this.$store.dispatch('StoreCurrency/getCurrencyList');
    },
  },

  methods: {

  },
};
</script>
