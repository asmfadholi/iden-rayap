<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group label="General Head and Mandible's shape ">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Nasutus head |degenerate and not functional mandible
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_005.png')"
            alt="Fluid image"/>
          <br>
          (Sornnuwat, 2004)
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
          Other than nasutus head | Well developed and functional mandible
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_006.png')"
            alt="Fluid image"/>
          <br>
          (Sornnuwat, 2004)
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
      if (val === '1') {
        this.$emit('phaseThree', { value: this.selected, result: 'Others' });
      } else {
        this.$emit('phaseThree', this.selected);
      }
    },
  },

};
</script>
