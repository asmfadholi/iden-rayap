<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Antenna articles ">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          16 articles/segment
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
          17 articles/segment
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
        <slot name="2"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '5'">
      <hr>
      <b-form-group
        label="Antenna articles ">
        <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Broadly rounded
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_018-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
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
          Narrowly rounded
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_019-1.png')"
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

    <div v-else-if="data === '6'">
      <hr>
      <b-form-group
        label="Left mandible tooth's location">
        <i
          :class="selected === '5' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('5')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          anterior of mandible's mid point
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_020.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
          Between mandible's basal third to mid point
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_021-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
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
        this.$emit('phaseSeven', null);
      }
    },
    data(newVal) {
      if (newVal !== '4' || newVal !== '5' || newVal !== '6') {
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
      if (val === '1' || val === '2') {
        this.$emit('phaseSeven', { value: this.selected, result: val === '1' ? 'Odontotermes karnyi ' : 'Odontotermes grandiceps' });
      } else if (val === '3') {
        this.$emit('phaseSeven', { value: this.selected, result: 'Odontotermes celebensis' });
      } else {
        this.$emit('phaseSeven', this.selected);
      }
    },
  },

};
</script>
