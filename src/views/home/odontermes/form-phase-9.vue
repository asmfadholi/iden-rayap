<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Head's shape (mm)">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Subrectangular
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_026.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
          Ovoid
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_027.png')"
            alt="Fluid image"/>
          <br>
          (Amir, 1975)
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
        label="Labrum's form">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Lancet (L>>W)
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_025-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
        <br>
        <hr>
        <!-- <i
          :class="selected === '4' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('4')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          Dome with small cupola ( L < W )
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_025-2.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
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
        this.$emit('phaseNine', null);
      }
    },
    data(newVal) {
      if (newVal !== '4' || newVal !== '6') {
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
        this.$emit('phaseNine', { value: this.selected, result: val === '1' ? 'Odontotermes takensis' : 'Odontotermes minutus ' });
      } else if (val === '3' || val === '4') {
        this.$emit('phaseNine', { value: this.selected, result: val === '3' ? 'Odontotermes makassarensis' : 'Odontotermes boetonensis' });
      } else {
        this.$emit('phaseNine', this.selected);
      }
    },
  },

};
</script>
