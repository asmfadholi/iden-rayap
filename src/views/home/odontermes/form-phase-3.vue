<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group label="Head's length (mm)">
        <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          0.95 - 1.25
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_004.png')"
            alt="Fluid image"/> -->
          <!-- <br> -->
          <!-- (Rathore and Bhattacharyya, 2004) -->
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
          1.35 - 1.74
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_005.png')"
            alt="Fluid image"/> -->
          <!-- <br> -->
          <!-- (Rathore and Bhattacharyya, 2004) -->
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
      <b-form-group label="Head's width ration (widest/narrowest)">
        <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          1.22 - 1.31
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_006.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Rathore and Bhattacharyya, 2004) -->
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
          >1.31

          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_007.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Rathore and Bhattacharyya, 2004) -->
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
        this.$emit('phaseThree', null);
      }
    },
    data() {
      this.$emit('phaseThree', null);
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

    isFinished() {
      this.$emit('phaseThree', this.selected);
    },
  },

};
</script>
