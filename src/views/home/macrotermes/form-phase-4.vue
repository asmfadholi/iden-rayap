<template>
  <div>

    <div v-if="data === '5'">
      <hr>
      <b-form-group
        label="Head's length (mm)">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Major Soldier < 3.2
          <br/>
          Minor Soldier < 2.4
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_008.png')"
            alt="Fluid image"/>
          <br> -->
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
          Major Soldier >=3.2
          <br/>
          Minor Soldier >2.7
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_009.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-if="data === '6'">
      <hr>
      <b-form-group
        label="Head's length (mm)">
        <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Major Soldier >=3.2
          <br/>
          Minor Soldier >2.7
          <!-- <br>
          <b-img
            :height="150"
            :src="require('@/assets/Microtermes/mic_006.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Rathore and Bhattacharyya, 2004) -->
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
        this.$emit('phaseFour', null);
      }
    },
    data(newVal) {
      if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '4') {
        this.$emit('phaseFour', null);
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

    isFinished(val) {
      if (val === '1' || val === '2') {
        this.$emit('phaseFour', { value: this.selected, result: val === '1' ? 'Macrotermes azarelli/gilvus' : 'Macrotermes barneyi' });
      } else {
        this.$emit('phaseFour', this.selected);
      }
    },
  },

};
</script>
