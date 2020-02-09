<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Left mandible's form">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Stout with hook tip, a lot of crenulation on inner margin
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_012.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
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
          Slender with small amount of serrated inner margin
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_013.png')"
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
        this.$emit('phaseEight', null);
      }
    },
    data(newVal) {
      if (newVal === '1' || newVal === '3') {
        this.$emit('phaseEight', null);
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
      if (val === '1') {
        this.$emit('phaseEight', { value: this.selected, result: 'Macrotermes A sp.' });
      } else {
        this.$emit('phaseEight', this.selected);
      }
    },
  },

};
</script>
