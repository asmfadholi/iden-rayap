<template>
  <div>

    <b-container>
      <!-- <div class="title">
        <b-row>
          <b-col>
            <h3> Microtermes </h3>
            <b-form-select
              v-model="selected"
              :options="options"
            />
          </b-col>
          <b-col>
            <b-button
              variant="success"
              @click="checkResult">Check
            </b-button>
            <b-button
              variant="danger"
              @click="resetData">Reset
            </b-button>
            <br>
            <br>
            Result: <i>{{ result }}</i>
          </b-col>
        </b-row>
      </div> -->

      <div class="p__t--130">
        <br>
        <h3> Microtermes </h3>

        <!-- <phaseOne @phaseOne="phase($event, 1)">
        <div :slot="phase_1"> -->
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
      <!-- </div>
      </phaseOne> -->

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
      <br>
      <br>
      <br>
      <b>Reference</b>
      <br>
      <p>
        Ahmad, M. (1965). <i>Termites (Isoptera) of Thailand. Bulletin of the American Museum of Natural History </i>(Vol. 131). New York: American Museum of Natural History.
      </p>
      <p>
        Maiti, P. K. (1983). <i>Termite fauna (Isoptera) of West Bengal , India, Their Recognition, Biology, and Ecology</i>. (Z. S. of I. The Director, Ed.), <i>Occasional Paper No 42</i>. Calcutta: Zoological Survey of India.
      </p>
     <p>
        Rathore, N. S., & Bhattacharyya, A. K. (2004). <i>Termite (Insecta : Isoptera) Fauna of Gujarat and Rajasthan - Present State of Knowledge. </i>(Z. S. of I. The Director, Ed.), <i>Occasional Paper No 223</i>. Calcutta: Zoological Survey of India.
      </p>

    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
      selected: null,
      options: [
        {
          id: 1,
          label: 'Microtermes',
          text: 'Microtermes',
          value: 1,
        },
        {
          id: 2,
          label: 'Macrotermes',
          text: 'Macrotermes',
          value: 2,
        },
      ],
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
      for (let i = 1; i <= 4; i += 1) {
        this[`phase_${i}`] = null;
      }
      this.result = null;
    },
    phase(newVal, number) {
      this[`phase_${number}`] = newVal;
      if (this[`phase_${number + 1}`]) {
        this[`phase_${number + 1}`] = null;
      }
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

<style lang="scss">
  .title {
    padding: 15px;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    position: fixed;
    z-index: 4;
    height: auto;
    width: 100%;
    background: white;
  }
</style>
