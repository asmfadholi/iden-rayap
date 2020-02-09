<template>
  <div>

    <div>
      <hr>
      <b-form-group label="Left mandible's tooth shape">
        <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          pointy, anteriorly directed with acute angle against the mandible's inner margin
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_001.png')"
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

          Blunt, laterally directed with broad angle against the mandible's inner margin

          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_002.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Ahmad, 1965; Maiti, 1983) -->
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
        this.$emit('phaseTwo', null);
      }
    },
    data(newVal) {
      if (newVal === '1') {
        this.$emit('phaseTwo', null);
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

    isFinished() {
      this.$emit('phaseTwo', this.selected);
    },
  },

};
</script>
