<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Postmentum Shape ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          "anteriorly narrower than the middle part
          (Wm-Wa >0)"
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_010.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Rathore and Bhattacharyya, 2004) -->
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
          "equal to anteriorly wider than the middle part
          (Wm-Wa <=0)"
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_011.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Ahmad, 1965) -->
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
        this.$emit('phaseSix', null);
      }
    },
    data(newVal) {
      if (newVal === '1') {
        this.$emit('phaseSix', null);
      }
    },
  },
  methods: {
    change(newVal) {
      this.selected = newVal;
    },

    isFinished(val) {
      if (val === '1') {
        this.$emit('phaseSix', { value: this.selected, result: 'estherae' });
      } else {
        this.$emit('phaseSix', this.selected);
      }
    },
  },

};
</script>
