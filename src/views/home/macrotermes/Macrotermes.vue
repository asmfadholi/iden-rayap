<template>
  <b-container>

    <div>
      <br>
      <h3 class="m__t--130"> Macrotermes </h3>
      <phaseOne
        @phaseOne="phase($event, 1)">
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
                    @phaseFour="phase($event, 4)">
                    <div :slot="phase_4">

                      <phaseFive
                        :data="phase_4"
                        class="m__l--25"
                        @phaseFive="phase($event, 5)">
                        <div :slot="phase_5">

                          <phaseSix
                            :data="phase_5"
                            class="m__l--25"
                            @phaseSix="phase($event, 6)">
                            <div :slot="phase_6">

                              <phaseSeven
                                :data="phase_6"
                                class="m__l--25"
                                @phaseSeven="phase($event, 7)">
                                <div :slot="phase_7">

                                  <phaseEight
                                    :data="phase_7"
                                    class="m__l--25"
                                    @phaseEight="phase($event, 8)">
                                    <div :slot="phase_8">

                                      <phaseNine
                                        :data="phase_8"
                                        class="m__l--25"
                                        @phaseNine="phase($event, 9)"/>

                                    </div>
                                  </phaseEight>

                                </div>
                              </phaseSeven>

                            </div>
                          </phaseSix>

                        </div>
                      </phaseFive>

                    </div>
                  </phaseFour>

                </div>

              </phaseThree>

            </div>
          </phaseTwo>
        </div>
      </phaseOne>

    </div>
    <br>
    <!-- <b-button
      variant="success"
      @click="checkResult">Check
    </b-button>
    <b-button
      variant="danger"
      @click="resetData">Reset
    </b-button>
    <br>
    <br>
    Result: <i>{{ result }}</i> -->
    <!-- <br>
    <br> -->
    <br>
    <b>Reference</b>
    <br>
    <p>
      Ahmad, M. (1965). Termites (Isoptera) of Thailand. Bulletin of the American Museum of Natural History (Vol. 131). New York: American Museum of Natural History.
    </p>
    <p>
      Maiti, P. K. (1983). Termite fauna (Isoptera) of West Bengal , India, Their Recognition, Biology, and Ecology. (Z. S. of I. The Director, Ed.), Occasional Paper No 42. Calcutta: Zoological Survey of India.
    </p>
    <p>
      Rathore, N. S., & Bhattacharyya, A. K. (2004). Termite (Insecta : Isoptera) Fauna of Gujarat and Rajasthan - Present State of Knowledge. (Z. S. of I. The Director, Ed.), Occasional Paper No 223. Calcutta: Zoological Survey of India.
    </p>

  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import phaseOne from './form-phase-1';
import phaseTwo from './form-phase-2';
import phaseThree from './form-phase-3';
import phaseFour from './form-phase-4';
import phaseFive from './form-phase-5';
import phaseSix from './form-phase-6';
import phaseSeven from './form-phase-7';
import phaseEight from './form-phase-8';
import phaseNine from './form-phase-9';


export default {
  components: {
    phaseOne,
    phaseTwo,
    phaseThree,
    phaseFour,
    phaseFive,
    phaseSix,
    phaseSeven,
    phaseEight,
    phaseNine,
  },
  data() {
    return {
      phase_1: null,
      phase_2: null,
      phase_3: null,
      phase_4: null,
      phase_5: null,
      phase_6: null,
      phase_7: null,
      phase_8: null,
      phase_9: null,
      result: null,
    };
  },

  computed: {
    ...mapState('StoreResult', ['result_state']),
  },

  watch: {
    // eslint-disable-next-line
    'result_state.check' () {
      this.checkResult();
    },

    // eslint-disable-next-line
    'result_state.reset' () {
      this.resetData();
    },
  },


  methods: {
    resetData() {
      for (let i = 1; i <= 9; i += 1) {
        this[`phase_${i}`] = null;
      }
      this.result = null;
    },
    phase(newVal, number) {
      this[`phase_${number}`] = newVal;
      if (this[`phase_${number+1}`]) {
        this[`phase_${number+1}`] = null;
      }
    },
    checkResult() {
      let number = null;
      for (let i = 1; i <= 9; i += 1) {
        if (this[`phase_${i}`]) {
          if (typeof this[`phase_${i}`] === 'object') {
            if (number === null) {
              number = i;
            }
          }
        }
      }
      for (let i = 9; i >= 1; i -= 1) {
        if (this[`phase_${i}`]) {
          if (typeof this[`phase_${i}`] === 'object') {
            if (i > number) {
              this[`phase_${i}`] = null;
            } else {
              this.result = this[`phase_${i}`].result;
              this.$store.commit('StoreResult/setResult', this.result);
              return;
            }
          }
        }
      }
      this.result = 'not found';
      this.$store.commit('StoreResult/setResult', this.result);
    },
  },

};
</script>
