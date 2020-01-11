<template>
  <div>

    <div v-if="data === '5'">
      <hr>
      <b-form-group
        label="Major soldier Head's length (mm)">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          < 3.2
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_008.png')"
            alt="Fluid image"/>
          <br> -->
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
          >= 3.2
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_009.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-if="data === '6'">
      <hr>
      <b-form-group
        label="Major soldier Head's length (mm)">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          < 3.2
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Rathore and Bhattacharyya, 2004) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
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
        this.$emit('phaseFour', null);
      }
    },
    data(newVal) {
      if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '4') {
        this.$emit('phaseFour', null);
      }
    },
  },
  methods: {
    change(newVal) {
      this.selected = newVal;
    },

    isFinished(val) {
      if (val === '1' || val === '2') {
        this.$emit('phaseFour', { value: this.selected, result: val === '1' ? 'azarelli' : 'barneyi' });
      } else {
        this.$emit('phaseFour', this.selected);
      }
    },
  },

};
</script>
