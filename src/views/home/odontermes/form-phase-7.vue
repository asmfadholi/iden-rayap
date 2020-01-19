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
          < 5.5
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
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          <=6.8
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
          < 8
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

    isFinished(val) {
      if (val === '1' || val === '3') {
        this.$emit('phaseSeven', { value: this.selected, result: val === '1' ? 'maesodensis' : 'annadalei' });
      } else {
        this.$emit('phaseSeven', this.selected);
      }
    },
  },

};
</script>
