<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group label="The labrum's shape ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Tongue
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_003.png')"
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
          Lancet
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_004.png')"
            alt="Fluid image"/>
          <br>
          (Rathore and Bhattacharyya, 2004)
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

          Longer and narrow tongue
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_005.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965; Rathore and Bhattacharyya, 2004)


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
        this.$emit('phaseThree', { value: this.selected, result: val === '1' ? 'Microtermes mycophagus' : 'Microtermes incertoides' });
      } else {
        this.$emit('phaseThree', this.selected);
      }
    },
  },

};
</script>
