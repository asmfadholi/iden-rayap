<template>
  <div class="Home">
    <div>

      <b-container
        class="container-card"
        fluid>
        <b-row>

          <b-col />

          <b-col
            class="content-currency"
            cols="12"
            sm="8"
            md="6"
            lg="5">
            <NumberCurrency @numberData="numberData"/>
            <hr>
            <Contents
              :number-data="number_data"
              :current-data="current_data"
              @removeCurrency="removeCurrency"/>
            <hr>
            <AddCurrency
              :currency-data="currency_data"
              @submitCurrency="submitCurrency"/>
          </b-col>

          <b-col />

        </b-row>
      </b-container>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Contents from './Contents';
import AddCurrency from './AddCurrency';
import NumberCurrency from './NumberCurrency';

export default {
  name: 'Home',
  components: {
    Contents,
    AddCurrency,
    NumberCurrency,
  },

  data() {
    return {
      init: false,
      number_data: 10,
      currency_data: [],
      current_data: [],
    };
  },

  computed: {
    ...mapGetters('StoreCurrency', ['currency_options']),
  },

  watch: {
    currency_options(newVal) {
      if (newVal.length === this.currency_data.length || this.init === false) {
        this.currency_data = [...newVal];
        this.init = true;
      } else {
        this.renewData(newVal, this.currency_data);
        this.renewData(newVal, this.current_data);
      }
      this.current_data.forEach((current, index) => {
        const filterCurrency =
          this.currency_data.filter(currency => currency.currency === current.currency);
        if (filterCurrency.length > 0) {
          this.current_data.splice(index, 1, filterCurrency[0]);
        }
      });
    },
  },

  created() {
    this.$store.dispatch('StoreCurrency/getCurrencyList');
  },

  methods: {
    findIdAndRemove(id) {
      this.currency_data.forEach((data, index) => {
        if (data.id === id) {
          this.currency_data.splice(index, 1);
        }
      });
    },

    submitCurrency(value) {
      this.findIdAndRemove(value.id);
      this.current_data.push(value);
    },

    removeCurrency(currency, index) {
      this.current_data.splice(index, 1);
      this.currency_data.push(currency);
    },

    numberData(number) {
      this.number_data = number;
    },

    renewData(newVal, oldVal) {
      oldVal.forEach((current, index) => {
        const filterCurrency = newVal.filter(currency => currency.currency === current.currency);
        if (filterCurrency.length > 0) {
          oldVal.splice(index, 1, filterCurrency[0]);
        }
      });
    },

  },
};
</script>
