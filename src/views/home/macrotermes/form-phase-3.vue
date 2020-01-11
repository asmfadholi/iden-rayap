<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group label="Heads shape ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Trapezium with narrower width anteriorly
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_004.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Rathore and Bhattacharyya, 2004) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="1"/>
        <br>
        <hr>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          Ovoid
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_005.png')"
            alt="Fluid image"/>
          <br>
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
      <b-form-group label="Mesonotum lateral lobe shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Broadly rounded
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_006.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Rathore and Bhattacharyya, 2004) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
        <br>
        <hr>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          Angular
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_007.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Rathore and Bhattacharyya, 2004) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="4"/>
        <br>

      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '3'">
      <hr>
      <b-form-group label="Mesonotum lateral lobe shape">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          Broadly rounded
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_006.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Rathore and Bhattacharyya, 2004) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>
        <hr>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          Angular
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_007.png')"
            alt="Fluid image"/>
          <br>
          <!-- (Rathore and Bhattacharyya, 2004) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="6"/>
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

    isFinished(val) {
      if (val === '1' || val === '2') {
        this.$emit('phaseThree', { value: this.selected, result: val === '1' ? 'malaccensis' : 'species B' });
      } else if (val === '3' || val === '4') {
        this.$emit('phaseThree', { value: this.selected, result: val === '3' ? 'gilvus' : 'chaiglomi ' });
      } else {
        this.$emit('phaseThree', this.selected);
      }
    },
  },

};
</script>
