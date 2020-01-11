<template>
  <div>
    <hr>
    <b-row>
      <b-col>
        <b-form-group label="Head's Color">
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="1"
            @change="change">Black
          </b-form-radio>
          <br>
          <br>
          <slot name="1"/>
          <br>
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="2"
            @change="change">Brown or lighter
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
      this.selected = newVal;
    },

    isFinished(val) {
      if (val === '1') {
        this.$emit('phaseOne', { value: this.selected, result: 'carbonarius' });
      } else {
        this.$emit('phaseOne', this.selected);
      }
    },
  },

};
</script>
