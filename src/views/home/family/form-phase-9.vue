<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Head and Mandible's shape ">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Tear drop shaped | weekly curved
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_021.png')"
            alt="Fluid image"/>
          <br>
          (Maiti, 1983)
        </b-form-radio>
        <br>
        <br>
        <slot name="1"/>
        <br>
        <hr>
        <!-- <i
          :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('2')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          almost round | higly curved like crescent moon
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_022.png')"
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
      if (val === '1' || val === '2') {
        this.$emit('phaseNine', { value: this.selected, result: val === '1' ? 'Microtermes' : 'Ancistrotermes' });
      } else {
        this.$emit('phaseNine', this.selected);
      }
    },
  },

};
</script>
