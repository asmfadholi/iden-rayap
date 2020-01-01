<template>
  <b-container>
    <h3> Microtermes </h3>
    <div>

      <phaseOne @phaseOne="phase($event, 1)">
        <div :slot="phase_1">
          <phaseTwo
            :data="phase_1"
            class="m__l--25"
            @phaseTwo="phase($event, 2)">
            <div :slot="phase_2">

              <phaseThree
                :data="phase_2"
                class="m__l--25"
                @phaseThree="phase($event, 3)">

                <div :slot="phase_3">

                  <phaseFour
                    :data="phase_3"
                    class="m__l--25"
                    @phaseFour="phase($event, 4)"/>
                </div>

              </phaseThree>

            </div>
          </phaseTwo>
        </div>
      </phaseOne>

    </div>
    <br>
    <b-button
      variant="success"
      @click="checkResult">Check
    </b-button>
    <br>
    <br>
    Result: <i>{{ result }}</i>
  </b-container>
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
      result: null,
    };
  },


  methods: {
    phase(newVal, number) {
      this[`phase_${number}`] = newVal;
    },
    checkResult() {
      let number = null;
      for (let i = 1; i <= 4; i += 1) {
        if (this[`phase_${i}`]) {
          if (typeof this[`phase_${i}`] === 'object') {
            if (number === null) {
              number = i;
            }
          }
        }
      }
      for (let i = 4; i >= 1; i -= 1) {
        if (this[`phase_${i}`]) {
          if (typeof this[`phase_${i}`] === 'object') {
            if (i > number) {
              this[`phase_${i}`] = null;
            } else {
              this.result = this[`phase_${i}`].result;
              return;
            }
          }
        }
      }
      this.result = 'not found';
    },
  },

};
</script>
