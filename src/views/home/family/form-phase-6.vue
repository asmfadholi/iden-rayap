<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group
        label="Right mandible teeth ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Distinct teeth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_010.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
          Minute or non existent
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_011.png')"
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

    <div v-else-if="data === '2'">
      <hr>
      <b-form-group
        label="Hyaline tip">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_012.png')"
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
          Not present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_013.png')"
            alt="Fluid image"/>
          <br>
          (Rathore and Bhattacharyya, 2004)
        </b-form-radio>

        <br>
        <br>
        <slot name="4"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '4'">
      <hr>
      <b-form-group
        label="Antenna articles">
        <!-- <i
          :class="selected === '5' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('5')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          13
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_018.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1934) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>
        <hr>
        <i
          :class="selected === '6' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('6')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          >13
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_019.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1934) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="6"/>
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
      if (newVal === '3') {
        this.$emit('phaseSix', null);
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
        this.$emit('phaseSix', { value: this.selected, result: val === '1' ? 'Others' : 'Odontotermes' });
      } else if (val === '3' || val === '5') {
        this.$emit('phaseSix', { value: this.selected, result: val === '3' ? 'Macrotermes' : 'Homallotermes' });
      } else {
        this.$emit('phaseSix', this.selected);
      }
    },
  },

};
</script>
