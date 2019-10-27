<template>
  <div class="add-currency">

    <b-button
      v-if="!add_more && currencyData.length > 0"
      variant="info"
      @click="addMoreCurrency"><b>Add More Currencies</b></b-button>
    <b-row v-else-if="add_more">
      <b-col
        cols="8"
        sm="8"
        md="8">
        <b-form-group :class="{ 'form-group--error': $v.value.$error }">
          <vue-multiselect
            v-model="value"
            :options="currency_options"
            placeholder="Select one"
            label="currency"
            track-by="currency" />
        </b-form-group>
      </b-col>
      <b-col>

        <b-button
          variant="success"
          @click="submitCurrency">
          Submit
        </b-button>

      </b-col>
    </b-row>

    <div v-else>
      All of currencies have been registered
    </div>

  </div>
</template>

<script>
import ValidateAddCurrency from '@/mixins/validations/ValidateAddCurrency';

export default {
  mixins: [
    ValidateAddCurrency,
  ],
  props: {
    currencyData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      add_more: false,
      value: null,
    };
  },
  computed: {
    currency_options() {
      const sortCurrency = [...this.currencyData].sort((a, b) => a.id - b.id);
      return sortCurrency;
    },
  },
  methods: {
    addMoreCurrency() {
      this.add_more = true;
      this.$v.value.$reset();
    },

    submitCurrency() {
      this.$v.value.$touch();
      if (!this.$v.value.$error) {
        this.$emit('submitCurrency', this.value);
        this.value = null;
        this.add_more = false;
      }
    },
  },
};
</script>
