<template>
  <div>

    <div v-if="data === '1'">
      <hr>
      <b-form-group label="Antenna articles ">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          15
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
        <!-- <i
          :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('2')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          14
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
      <b-form-group label="Cephalic Ringes">
        <!-- <i
          :class="selected === '3' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('3')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          Present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_001.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
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
            :src="require('@/assets/Pericapritermes/Pericapri_002.png')"
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

    <div v-else-if="data === '3'">
      <hr>
      <b-form-group label="Left mandible tip ">
        <!-- <i
          :class="selected === '5' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('5')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          small tip
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_003.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>

      </b-form-group>
      <hr>
    </div>


    <div v-else-if="data === '4'">
      <hr>
      <b-form-group label="Median suture presence">
        <i
          :class="selected === '6' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('6')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          absent, sometimes faint, not up to fontanelle
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_004.png')"
            alt="Fluid image"/>
          <br>
          (Silvestri, 1922)
        </b-form-radio>
        <br>
        <br>
        <slot name="6"/>
        <br>
        <hr>


        <i
          :class="selected === '7' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('7')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="7"
          @change="change">
          strongly marked, reaching almost to the fontanelle. In some cases connects directly with fontanelle
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_005.png')"
            alt="Fluid image"/>
          <br>
          (Silvestri, 1922; Ahmad, 1965)
        </b-form-radio>
        <br>
        <br>
        <slot name="7"/>
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
      // this.$emit('phaseThree', null);
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
      if (val === '1' || val === '2') {
        this.$emit('phaseThree', { value: this.selected, result: val === '1' ? 'Pericapritermes speciosus' : 'Pericapritermes A sp*1.' });
      } else if (val === '3' || val === '5') {
        this.$emit('phaseThree', { value: this.selected, result: val === '3' ? 'Pericapritermes B sp*2.' : 'Pericapritermes  semarangi' });
      } else {
        this.$emit('phaseThree', this.selected);
      }
    },
  },

};
</script>
