<template>
  <div>
    <hr>
    <b-row>
      <b-col>
        <b-form-group label="Fontanelle">
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="1"
            @change="change">Not Present
            <br>
            <b-img
              :height="150"
              :src="require('@/assets/Family/F_001.png')"
              alt="Fluid image"/>
            <br>
            (Sornnuwat, 2004)
          </b-form-radio>
          <br>
          <br>
          <slot name="1"/>
          <br>
          <i
            :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
            class="fa"
            @click="toggle('2')"/>
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="2"
            @change="change">Present
            <br>
            <b-img
              :height="150"
              :src="require('@/assets/Family/F_002.png')"
              alt="Fluid image"/>
            <br>
            (Sornnuwat, 2004)
          </b-form-radio>

          <br>
          <br>
          <slot name="2"/>
          <br>
        </b-form-group>
      </b-col>
    </b-row>
    <hr>
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
    // eslint-disable-next-line
    selected(newVal) {
      if (newVal) {
        this.isFinished(newVal);
      } else {
        this.$emit('phaseOne', null);
      }
    },
  },

  methods: {
    change(newVal) {
      this.selected = ''
      setTimeout(() => {
        this.selected = newVal;
      }, 100)
      // this.$emit('phaseOne', newVal);
    },

    reset() {
      this.selected = ''
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
        this.$emit('phaseOne', { value: this.selected, result: 'Others' });
      } else {
        this.$emit('phaseOne', this.selected);
      }
    },
  },

};
</script>
