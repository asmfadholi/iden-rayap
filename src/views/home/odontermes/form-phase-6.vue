<template>
  <div>

    <div v-if="data === '10'">
      <hr>
      <b-form-group
        label="Labrum's tip extension compared to left mandible tooth position  ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Not extending up to the tooth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_016.png')"
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
          Extending up and beyond the tooth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_017.png')"
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

    <div v-else-if="data === '11'">
      <hr>
      <b-form-group
        label="Anterior labrum's tip shape  ">
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

    <div v-else-if="data === '12'">
      <hr>
      <b-form-group
        label="Head/Mandible ration (head length/mandibles length)">
        <i
          :class="selected === '5' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('5')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          >2
          <br>
          Ref: Head length range: 2.2 - 2.55

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
          <=2
          <br />
          Ref: Head length range: 1.3 - 2.1

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
      if (newVal !== '10' || newVal !== '11' || newVal !== '12') {
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
        this.$emit('phaseSix', { value: this.selected, result: val === '1' ? 'Odontotermes feae' : 'Odontotermes  maesodensis' });
      } else if (val === '3') {
        this.$emit('phaseSix', { value: this.selected, result: 'Odontotermes bogoriensis' });
      } else {
        this.$emit('phaseSix', this.selected);
      }
    },
  },

};
</script>
