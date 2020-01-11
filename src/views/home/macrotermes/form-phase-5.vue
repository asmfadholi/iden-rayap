<template>
  <div>

    <div v-if="data === '3'">
      <hr>
      <b-form-group
        label="Antero-lateral lobe of pronotum's shape form ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          very prominent with long setae
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_008.png')"
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
          not so prominent
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_009.png')"
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
        this.$emit('phaseFive', null);
      }
    },
    data(newVal) {
      if (newVal === '1' || newVal === '2') {
        this.$emit('phaseFive', null);
      }
    },
  },
  methods: {
    change(newVal) {
      this.selected = newVal;
    },

    isFinished(val) {
      if (val === '1') {
        this.$emit('phaseFive', { value: this.selected, result: 'ahmadi' });
      } else {
        this.$emit('phaseFive', this.selected);
      }
    },
  },

};
</script>
