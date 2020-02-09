<template>
  <div>

    <div v-if="data === '2'">
      <hr>
      <b-form-group
        label="Mandible's crenulation">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_017.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
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
          Not present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_019.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '4'">
      <hr>
      <b-form-group
        label="labrum's anterior shape">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          almost a straight line
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_019.png')"
            alt="Fluid image"/>
          <br>
          (Silvestri, 1922)
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
        <br>
        <hr>
        <!-- <i
          :class="selected === '4' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('4')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          deeply notched into a v shape
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_020.png')"
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
        this.$emit('phaseEight', null);
      }
    },
    data(newVal) {
      if (newVal !== '2' || newVal !== '4') {
        this.$emit('phaseEight', null);
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
      if (val === '1' || val === '3') {
        this.$emit('phaseEight', { value: this.selected, result: val === '1' ? 'Others' : 'Pericapritermes' });
      } else if (val === '4') {
        this.$emit('phaseEight', { value: this.selected, result: 'Discupiditermes'});
      } else {
        this.$emit('phaseEight', this.selected);
      }
    },
  },

};
</script>
