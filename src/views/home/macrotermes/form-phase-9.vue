<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Mesonotum postero lateral shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          convex
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_014.png')"
            alt="Fluid image"/>
          <br>
          (Weidner, 1962)
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
          concave
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_015.png')"
            alt="Fluid image"/>
          <br>
          (Weidner, 1962)
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
        this.$emit('phaseNine', null);
      }
    },
    data(newVal) {
      if (newVal !== '2') {
        this.$emit('phaseNine', null);
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
        this.$emit('phaseNine', { value: this.selected, result: val === '1' ? 'Macrotermes serrulatus' : 'Macrotermes hopini' });
      } else {
        this.$emit('phaseNine', this.selected);
      }
    },
  },

};
</script>
