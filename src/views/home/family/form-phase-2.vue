<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group label="Pronotum's shape">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Flat
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_003.png')"
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

          Saddle shape

          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_004.png')"
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
      if (val === '1') {
        this.$emit('phaseTwo', { value: this.selected, result: 'Others' });
      } else {
        this.$emit('phaseTwo', this.selected);
      }

    },
  },

};
</script>
