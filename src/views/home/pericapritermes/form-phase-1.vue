<template>
  <div>
    <hr>
    <b-row>
      <b-col>
        <b-form-group label="Head length + mandibles (1)">
          <i
            :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
            class="fa"
            @click="toggle('1')"/>
          <b-form-radio
            v-model="selected"
            name="some-radios"
            value="1"
            @change="change">"L : 4.40 - 6.05 | W : 1.48 - 1.95"

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
            @change="change">
            "L : 2.55 - 4.10 | W: 0.75 - 1.35"
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

    toggle(data) {
      if (this.selected === data) {
        this.selected = '';
      } else {
        this.selected = data;
      }
    },

    isFinished(val) {

      this.$emit('phaseOne', this.selected);

    },
  },

};
</script>
