<template>
  <div>

    <div>
      <hr>
      <b-form-group label="The head's and left mandible shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Almost round with rectangular base (P=L=Diag) + S-invS form mandible
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_001.png')"
            alt="Fluid image"/>
        </b-form-radio>
        <br>
        <br>
        <slot name="1"/>
        <br>
        <hr>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">

          Tear drop with rounded side in the posterior + /-\ form Mandible
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_002.png')"
            alt="Fluid image"/>

        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>
      </b-form-group>
      <hr>
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
        this.$emit('phaseTwo', null);
      }
    },
    data(newVal) {
      if (newVal === '1') {
        this.$emit('phaseTwo', null);
      }
    },
  },
  methods: {
    change(newVal) {
      this.selected = newVal;
    },

    isFinished(val) {
      if (val === '1') {
        this.$emit('phaseTwo', { value: this.selected, result: 'Microtermes pakistanicus*' });
      } else {
        this.$emit('phaseTwo', this.selected);
      }
    },
  },

};
</script>
