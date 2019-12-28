<template>
  <div>
    <div v-if="data === '3'">
      <b-form-group label="The Pronotum's anterior shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">Incised
        </b-form-radio>
        <br>
        <br>
        <slot name="1"/>
        <br>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">Notched
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>

      </b-form-group>
    </div>
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
      selected: '',
    };
  },
  watch: {
    selected(newVal) {
      if (newVal) {
        this.isFinished(newVal);
      } else {
        this.$emit('phaseThree', null);
      }
    },
    data(newVal) {
      if (newVal === '1') {
        this.$emit('phaseThree', null);
      }
    },
  },
  methods: {
    change(newVal) {
      this.selected = newVal;
    },

    isFinished(val) {
      if (val === '1' || val === '2') {
        this.$emit('phaseFour', { value: this.selected, result: val === '1' ? 'Microtermes unicolor' : 'Microtermes obesi' });
      } else {
        this.$emit('phaseFour', this.selected);
      }
    },
  },

};
</script>
