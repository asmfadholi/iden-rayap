<template>
  <div>
    <hr>
    <b-row>
      <b-col>
        <b-form-group label="Defining tooth near the tip of the left Mandible">
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="1"
            @change="change">Present
          </b-form-radio>
          <br>
          <br>
          <slot name="1"/>
          <br>
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="2"
            @change="change">Not Present, only denticle
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
    },

    isFinished(val) {
      if (val === '1') {
        this.$emit('phaseOne', { value: this.selected, result: 'Microtermes globicola ' });
      } else {
        this.$emit('phaseOne', this.selected);
      }
    },
  },

};
</script>
