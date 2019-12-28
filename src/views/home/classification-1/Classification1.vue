<template>
  <div>
    <h3> Microtermes </h3>
    <div class="step-1">
      <phaseOne @phaseOne="phase($event, '1')"/>
      <div v-if="phase_1">
        <phaseTwo
          :data="phase_1"
          @phaseTwo="phase($event, '2')"/>
      </div>
      <div v-if="phase_2">
        <phaseThree
          :data="phase_2"
          @phaseThree="phase($event, '3')"/>
      </div>
      <div v-if="phase_3">
        <phaseFour
          :data="phase_3"
          @phaseFour="phase($event, '4')"/>
      </div>

    </div>
  </div>
</template>

<script>
import phaseOne from './form-phase-1';
import phaseTwo from './form-phase-2';
import phaseThree from './form-phase-3';
import phaseFour from './form-phase-4';

export default {
  components: {
    phaseOne,
    phaseTwo,
    phaseThree,
    phaseFour,
  },
  data() {
    return {
      phase_1: null,
      phase_2: null,
      phase_3: null,
      phase_4: null,
    };
  },


  methods: {
    phase(newVal, number) {
      this[`phase_${number}`] = newVal;
    },
    checkResult() {
      for (let i = 4; i >= 1; i -= 1) {
        if (this[`phase_${i}`]) {
          if (this[`phase_${i}`].result) {
            return this.$emit('result', this[`phase_${i}`].result);
          }
        }
      }
      return this.$emit('result', 'not found');
    },
  },

};
</script>
