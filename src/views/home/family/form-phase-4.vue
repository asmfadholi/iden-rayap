<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Mandible's shape symmetry">
        <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Generally follows left-right symetry
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_004.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Chhotani, 1997) -->
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
          Left mandible is slighly to radically different in shape compared to right mandible
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_005.png')"
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
    // data(newVal) {
    //   if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '4') {
    //     this.$emit('phaseFour', null);
    //   }
    // },
  },
  methods: {
    change(newVal) {
      this.selected = ''
      setTimeout(() => {
        this.selected = newVal;
      }, 100)
    },

    toggle(data) {
      if (this.selected === data) {
        this.selected = '';
      } else {
        this.selected = data;
      }
    },

    isFinished(val) {
      this.$emit('phaseFour', val);
    },
  },

};
</script>
