<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Left mandible tip ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          a point hook
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_013.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
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
          blunt plane
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_014.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
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
      if (newVal !== '3') {
        this.$emit('phaseSix', null);
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
        this.$emit('phaseSix', { value: this.selected, result: val === '1' ? 'Pericapritermes C sp.' : 'Pericapritermes ceylonicus' });
      } else {
        this.$emit('phaseSix', this.selected);
      }
    },
  },

};
</script>
