<template>
  <div class="content">
    <transition-group
      name="fade"
      tag="div">
      <div
        v-for="(currency, index) in currentData"
        :key="currency.id">
        <b-row class="each-content pointer">
          <b-col>
            <h5>
              <b-row>
                <b-col
                  cols="3">
                  {{ currency.currency }}
                </b-col>
                <b-col>
                  <div class="float-to-right">
                    <tween-num
                      :value="currency_state.base_currency ?
                      Number(currency.value * numberData) : 0"
                      :initial="0"
                      :duration="500"
                      :formatter="formatNumber"
                      easing="easeOutQuart" />
                  </div>
                </b-col>
              </b-row>
            </h5>
            <p>
              <i>
                <b> {{ currency.currency }} -
                  {{ stand_for[currency.currency] }}
                </b>
                <br>
                1 {{ currency_state.base_currency ?
                currency_state.base_currency.currency : 'Unknown' }}
                = {{ currency.currency }}
                <tween-num
                  :value="currency_state.base_currency ?
                  Number(currency.value * 1) : 0"
                  :initial="0"
                  :duration="500"
                  :formatter="formatNumber"
                  easing="easeOutQuart" />
              </i>
            </p>
          </b-col>
          <b-col
            class="border-close float-to-center"
            cols="2">
            <div class="float-to-center">
              <i
                class="close-icon"
                @click="$emit('removeCurrency', currency, index)" />
            </div>

          </b-col>
        </b-row>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Constant from '@/utils/constant';
import { mapState } from 'vuex';

export default {
  props: {
    currentData: {
      type: Array,
      default: () => [],
    },
    numberData: {
      type: [Number, String],
      default: 10,
    },
  },
  computed: {
    ...mapState('StoreCurrency', ['currency_state']),

    stand_for() {
      return Constant.detail_currencies;
    },

  },
  methods: {
    formatNumber(val) {
      return val.toLocaleString(
        'en',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      );
    },
  },
};
</script>
