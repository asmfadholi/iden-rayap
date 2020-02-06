<template>
  <div>

    <div v-if="data === '4'">
      <hr>
      <b-form-group
        label="Labrum's tip extension compared to left mandible tooth position">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="1"
          @change="change">
          Extending up to the tooth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_022-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
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
          Extending beyond the tooth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_023-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
        </b-form-radio>

        <br>
        <br>
        <slot name="2"/>
        <br>


      </b-form-group>
      <hr>
    </div>

    <div v-else-if="data === '5'">
      <hr>
      <b-form-group
        label="Labrum's tip extension compared to left mandible tooth position">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="3"
          @change="change">
          1.9 to 2.1
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_022.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1934) -->
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
          1.3 to 1.7
          <br>
          <!-- <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_023.png')"
            alt="Fluid image"/>
          <br> -->
          <!-- (Kemner, 1934) -->
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
        label="Labrum's tip extension compared to left mandible tooth position">
        <!-- <i
          :class="selected === '1' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('1')"/> -->
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="5"
          @change="change">
          Extending slightly beyond the tooth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_024-1.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
        </b-form-radio>
        <br>
        <br>
        <slot name="5"/>
        <br>
        <hr>
        <i
          :class="selected === '6' ? 'fa-minus' : 'fa-plus'"
          class="fa"
          @click="toggle('6')"/>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="6"
          @change="change">
          Not extending up to the tooth
          <br>
          <b-img
            :height="150"
            :src="require('@/assets/Odontotermes/O_025_.png')"
            alt="Fluid image"/>
          <br>
          (Kemner, 1934)
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
        this.$emit('phaseEight', null);
      }
    },
    data(newVal) {
      if (newVal !== '4' || newVal !== '5' || newVal !== '6') {
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
      if (val === '1' || val === '2') {
        this.$emit('phaseEight', { value: this.selected, result: val === '1' ? 'Odontotermes javanicus' : 'Odontotermes bilitoni' });
      } else if (val === '3' || val === '5') {
        this.$emit('phaseEight', { value: this.selected, result: val === '3' ? 'Odontotermes malaccensis' : 'Odontotermes djampeensis' });
      } else {
        this.$emit('phaseEight', this.selected);
      }
    },
  },

};
</script>
