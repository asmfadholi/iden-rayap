<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="articles length">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Second articles subequal with third articles; fourth articles is the shortest
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
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="2"
          @change="change">
          Second articles length is equal to 1.5 to 2 times third articles
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

    <div v-else-if="data === '6'">
      <hr>
      <b-form-group
        label="Antenna's segment ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          15
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
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          16
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

    <div v-else-if="data === '7'">
      <hr>
      <b-form-group
        label="Labrum's shape ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          Broadly rounded
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_011.png')"
            alt="Fluid image"/>
          <br>
          (Chhotani, 1997)
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
          Narrowly rounded
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_012-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1930)
        </b-form-radio>

        <br>
        <br>
        <slot name="6"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '8'">
      <hr>
      <b-form-group
        label="Postmentum dimension ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="7"
          @change="change">
          L > 2W
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_011.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Chhotani, 1997) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="7"/>
        <br>
        <hr>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="8"
          @change="change">
          L=~2W
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_012-1.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1930) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="8"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '9'">
      <hr>
      <b-form-group
        label="Left mandible tooth's location ">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="9"
          @change="change">
          Basal third
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_013.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934; Ahmad, 1965)
        </b-form-radio>
        <br>
        <br>
        <slot name="9"/>
        <br>
        <hr>
        <i
          :class="selected === '10' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('10')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="10"
          @change="change">
          Up front of basal third to mandible's mid point
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_014-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934; Ahmad, 1965)
        </b-form-radio>

        <br>
        <br>
        <slot name="10"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '10'">
      <hr>
      <b-form-group
        label="Head's length (mm)">
        <i
          :class="selected === '11' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('11')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="11"
          @change="change">
          + M =>3.5
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_013.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1934; Ahmad, 1965) -->
        </b-form-radio>
        <br>
        <br>
        <slot name="11"/>
        <br>
        <hr>
        <i
          :class="selected === '12' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('12')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="12"
          @change="change">
          + M <3.5
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_014.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1934; Ahmad, 1965) -->
        </b-form-radio>

        <br>
        <br>
        <slot name="12"/>
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
      if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '5') {
        this.$emit('phaseFive', null);
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
      if (val ===  '1' || val === '2') {
        this.$emit('phaseFive', { value: this.selected, result: val === '1' ? 'Odontotermes indrapurensis' : 'Odontotermes formosanus' });
      } else if (val ===  '3' || val === '4') {
        this.$emit('phaseFive', { value: this.selected, result: val === '3' ? 'Odontotermes paraoblongatus ' : 'Odontotermes oblongatus ' });
      } else if (val ===  '5' || val === '6') {
        this.$emit('phaseFive', { value: this.selected, result: val === '5' ? 'Odontotermes gravelyi' : 'Odontotermes maximus' });
      } else if (val ===  '7' || val === '8') {
        this.$emit('phaseFive', { value: this.selected, result: val === '7' ? 'Odontotermes longignathus' : 'Odontotermes praevalens' });
      } else if (val ===  '9') {
        this.$emit('phaseFive', { value: this.selected, result: 'Odontotermes parvidens' });
      } else {
        this.$emit('phaseFive', this.selected);
      }

    },
  },

};
</script>
