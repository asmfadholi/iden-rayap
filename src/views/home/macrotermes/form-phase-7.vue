<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Head's length + mandible">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          major soldier < 5.5
          <br />
          minor soldier < 3.0
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
        <slot name="1"/>
        <br>
        <hr>
        <i
          :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('2')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          5.7 < major soldier <=6.8
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_007.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>
        <hr>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          7 < major soldier < 8
          <br />
          2.7 < minor soldier < 3.1
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_007.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
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
        this.$emit('phaseSeven', null);
      }
    },
    data(newVal) {
      if (newVal === '1') {
        this.$emit('phaseSeven', null);
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
      if (val === '1' || val === '3') {
        this.$emit('phaseSeven', { value: this.selected, result: val === '1' ? 'Macrotermes maesodensis' : 'Macrotermes annadalei' });
      } else {
        this.$emit('phaseSeven', this.selected);
      }
    },
  },

};
</script>
