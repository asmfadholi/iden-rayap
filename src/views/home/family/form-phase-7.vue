<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Head's general shape ">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Rectangular
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_014.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
          Round
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_015.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965; Rathore and Bhattacharyya, 2004)
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '6'">
      <hr>
      <b-form-group
        label="Mandible's symmetry ">
        <!-- <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Slighly symmetrical
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_016.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
        <br>
        <hr>
        <i
          :class="selected === '4' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('4')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          Highly asymmetrical
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_009.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
        </b-form-radio>

        <br>
        <br>
        <slot name="4"/>
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
      if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '5') {
        this.$emit('phaseSeven', null);
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
      if (val === '1' || val === '3') {
        this.$emit('phaseSeven', { value: this.selected, result: val === '1' ? 'Microcerotermes' : 'Procapritermes' });
      } else {
        this.$emit('phaseSeven', this.selected);
      }
    },
  },

};
</script>
