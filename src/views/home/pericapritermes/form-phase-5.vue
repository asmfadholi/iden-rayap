<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Head length/width ratio">
        <!-- <i
          :class="selected === '10' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('10')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          ">2.10
          <br/>
          Ref: Head length range: 2.5 - 2.9"
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
          "1.80 - 2.05
          <br>
          Ref: Head length range:  2.0 - 2.4"


          <br>
          <!-- <b-img
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

    <div v-if="data === '5'">
      <hr>
      <b-form-group
        label="Head length/width ratio">
        <!-- <i
          :class="selected === '10' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('10')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          "1.55 - 1.80
          <br>
          Ref: Head length range : 1.8 - 2.2"
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
        <slot name="3"/>
        <br>
        <hr>
        <!-- <i
          :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('2')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          "1.80 - 2.05
          <br>
          Ref: Head length range:  2.0 - 2.4"


          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Macrotermes/mac_009.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Ahmad, 1965) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="4"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-if="data === '6'">
      <hr>
      <b-form-group
        label="Left mandible tip ">
        <!-- <i
          :class="selected === '10' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('10')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          a point
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_013.png')"
            alt="Fluid image"/>
          <br>
          (Tho, 1992)
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>
        <hr>
        <!-- <i
          :class="selected === '2' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('2')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          blunt plane
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_012.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
        this.$emit('phaseFive', null);
      }
    },
    data(newVal) {
      // untuk kalau ada perubahan ke data yang ga masuk range maka parent di null kan
      if (newVal === '1' || newVal === '2' || newVal === '3') {
        this.$emit('phaseFive', null);
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
      if (val ===  '1' || val === '3') {
        this.$emit('phaseFive', { value: this.selected, result: val === '1' ? 'Pericapritermes dolichocephalus' : 'Pericapritermes mohri' });
      } else if (val ===  '4' || val === '5') {
        this.$emit('phaseFive', { value: this.selected, result: val === '4' ? 'Pericapritermes D sp.' : 'Pericapritermes buitenzorgi' });
      } else if (val ===  '6') {
        this.$emit('phaseFive', { value: this.selected, result: 'Pericapritermes nitobei' });
      } else {
        this.$emit('phaseFive', this.selected);
      }

    },
  },

};
</script>
