<template>
  <div>

    <div>
      <hr>
      <b-form-group label="Hyaline Tip's shape">
        <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Elongated tip, pointed - applicable to major and minor soldier
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_001.png')"
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

          Short tip, tongue like - anteriorly rounded  - applicable to major and minor soldier

          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_002.png')"
            alt="Fluid image"/>
          <br>
         (Ahmad, 1965)
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>
        <hr>
        <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">

          Major soldier: Short tip, trilobed pointy
          <br>
          Minor soldier: Short tip, trilobed pointy with narrower labrum compared to common major soldier

          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_003.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
        </b-form-radio>

        <br>
        <br>
        <slot name="3"/>
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
