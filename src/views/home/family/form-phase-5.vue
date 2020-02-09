<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group
        label="Mandible's inner margin">
         <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          have 1 or 2 teeth or having serrated surface
          <br>
          <!-- <b-img
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
         <i
          :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('2')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          most of the times tooth not present, basal third in crenulated form
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_007.png')"
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

    <div v-else-if="data === '2'">
      <hr>
      <b-form-group
        label="Antenna's segment ">
         <!-- <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Preset
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_008.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
          Not present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Family/F_009.png')"
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
        this.$emit('phaseFive', null);
      }
    },
    data(newVal) {
      // untuk kalau ada perubahan ke data yang ga masuk range maka parent di null kan
      // if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '5') {
      //   this.$emit('phaseFive', null);
      // }
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
      if (val ===  '3') {
        this.$emit('phaseFive', { value: this.selected, result: 'Others' });
      } else {
        this.$emit('phaseFive', this.selected);
      }

    },
  },

};
</script>
