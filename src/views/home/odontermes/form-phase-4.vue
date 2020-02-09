<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group
        label="Postmentum dimension ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Almost square
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_004.png')"
            alt="Fluid image"/>
          <br>
          (Chhotani, 1997)
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
          Rectangular
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_005.png')"
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

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Denticle in right mandible ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Not present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_006.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1947)
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
        <br>

        <i
          :class="selected === '4' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('4')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          Present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_007.png')"
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

    <div v-if="data === '3'">
      <hr>
      <b-form-group
        label="Head's shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          Not so rectangular, smaller species
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_009.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>

        <i
          :class="selected === '6' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('6')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          Rectangular
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_008.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
        </b-form-radio>
        <br>
        <br>
        <slot name="6"/>
        <br>

      </b-form-group>
      <hr>
    </div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Left mandible's length | Head + Mandible's length ">
        <i
          :class="selected === '7' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('7')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="7"
          @change="change">
          1.5 - 1.7 | + M => 4.5
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="7"/>
        <br>

        <i
          :class="selected === '8' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('8')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="8"
          @change="change">
          1.4 - 1.5 | + M = 4.2 - 4.5


          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="8"/>
        <br>

        <i
          :class="selected === '9' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('9')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="9"
          @change="change">
          1.35 - 1.7
          | + M = 3.6 - 4.2


          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="9"/>
        <br>

        <i
          :class="selected === '10' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('10')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="10"
          @change="change">
          < 1.35
          | + M = 2.3 - 4.0


          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="10"/>
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
        this.$emit('phaseFour', null);
      }
    },
    // data(newVal) {
    //   if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '4') {
    //     this.$emit('phaseFour', null);
    //   }
    // },
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
        this.$emit('phaseFour', { value: this.selected, result: val === '1' ? 'Odontotermes hainanensis' : 'Odontotermes sarawakensis' });
      } else if (val === '3' || val === '5') {
        this.$emit('phaseFour', { value: this.selected, result: val === '3' ? 'Odontotermes paradenticulatus' : 'Odontotermes butteli' });
      } else {
        this.$emit('phaseFour', this.selected);
      }
    },
  },

};
</script>
