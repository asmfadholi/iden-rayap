<template>
  <div>
    <b-row>
      <b-col>
        <b-form-group class="form-number">
          <label> Left mandible tooth </label>
          <vue-multiselect
            v-model="class1.mandible_tooth"
            :options="options_mandible"
            placeholder="Select one"
            label="label"
            track-by="label" />
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Array, Object, Number, Boolean],
      default: null,
    },
  },
  data() {
    return {
      class1: {
        mandible_tooth: null,
        is_next: true,
      },
      options_mandible: [
        {
          id: 1,
          label: 'sharp pointed tooth near the tip',
          text: 'sharp pointed tooth near the tip',
          value: 'sharp pointed tooth near the tip',
        },
        {
          id: 2,
          label: 'no tooth or rudimentary tooth',
          text: 'no tooth or rudimentary tooth',
          value: 'no tooth or rudimentary tooth',
        },
      ],
    };
  },
  watch: {
    // eslint-disable-next-line
    'class1.mandible_tooth': function (newVal) {
      if (newVal) {
        this.$emit('phaseOne', this.class1);
      } else {
        this.$emit('phaseOne', null);
      }
    },
  },

};
</script>
