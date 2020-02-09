<template>
  <div>

    <div v-if="data === '3'">
      <hr>
      <b-form-group label="The Pronotum's anterior shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Incised
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br>
          (Rathore and Bhattacharyya, 2004)
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
          Notched
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_007.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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

    toggle(data) {
      if (this.selected === data) {
        this.selected = '';
      } else {
        this.selected = data;
      }
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
