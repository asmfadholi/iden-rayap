<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group label="Head length + mandibles (2)">
        <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          L : 5.7 - 6.05
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_001.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
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

          L : 4.40 - 4.9

          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_002.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965; Maiti, 1983) -->
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
      <b-form-group label="Head length + mandibles (2)">
        <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          L : 2.55 - 3.10
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_001.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
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

          L: 3.20 - 4.10

          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_002.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965; Maiti, 1983) -->
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
        this.$emit('phaseTwo', null);
      }
    },
    data(newVal) {
      if (newVal === '1') {
        // this.$emit('phaseTwo', null);
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
      this.$emit('phaseTwo', this.selected);
    },
  },

};
</script>
