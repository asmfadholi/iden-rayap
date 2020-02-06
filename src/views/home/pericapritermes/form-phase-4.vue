<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Antero lateral processes of labrum">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Very short, anteriorly projected
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_006.png')"
            alt="Fluid image"/>
          <br>
          (Ahmad, 1965)
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
          Distinct, laterally projected
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_007.png')"
            alt="Fluid image"/>
          <br>
          (Maiti, 1983)
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
        label="Median suture position">
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          faint, almost not presence
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_008.png')"
            alt="Fluid image"/>
          <br>
          (Silvestri, 1922)
        </b-form-radio>
        <br>
        <br>
        <slot name="3"/>
        <br>

        <i
          :class="selected === '4' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('4')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="4"
          @change="change">
          faintly indicated, located from posterior up to 3/4 distance to the fontanelle
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
        <slot name="4"/>
        <br>

      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '7'">
      <hr>
      <b-form-group
        label="Processes shape">
        <i
          :class="selected === '5' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('5')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          almost not present
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_009.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>

        <i
          :class="selected === '6' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('6')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          narrow and short
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Pericapritermes/Pericapri_010.png')"
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
        this.$emit('phaseFour', null);
      }
    },
    data(newVal) {
      if (newVal === '1' || newVal === '2' || newVal === '3' || newVal === '5') {
        this.$emit('phaseFour', null);
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
      if (val === '1' || val === '2') {
        this.$emit('phaseFour', { value: this.selected, result: val === '1' ? 'Pericapritermes latignathus' : 'Pericapritermes  tetraphilus' });
      } else if (val === '3') {
        this.$emit('phaseFour', { value: this.selected, result: 'Pericapritermes  modigliani' });
      } else {
        this.$emit('phaseFour', this.selected);
      }
    },
  },

};
</script>
