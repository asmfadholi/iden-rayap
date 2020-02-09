<template>
  <div class="Home">
    <div>
      <b-container
        class="container-card">
        <div class="title">
          <b-row>
            <b-col>
              <b-form-select
                v-model="selected"
                :options="options"
                placeholder="Select title here"
              />
            </b-col>
            <b-col>
              <div v-if="selected !== 'guideline'">
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
                Result: <i>{{ result_state.result }}</i>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      selected: 'guideline',
      options: [
        {
          id: 0,
          label: 'Guideline',
          text: 'Guideline',
          value: 'guideline',
        },
        {
          id: 1,
          label: 'Microtermes',
          text: 'Microtermes',
          value: 'microtermes',
        },
        {
          id: 2,
          label: 'Macrotermes',
          text: 'Macrotermes',
          value: 'macrotermes',
        },
        {
          id: 3,
          label: 'Odontotermes',
          text: 'Odontotermes',
          value: 'odontotermes',
        },
        {
          id: 3,
          label: 'Pericapritermes',
          text: 'Pericapritermes',
          value: 'pericapritermes',
        },
        {
          id: 4,
          label: 'Family',
          text: 'Family',
          value: 'family',
        },
      ],
    };
  },
  computed: {
    ...mapState('StoreResult', ['result_state']),
  },

  watch: {
    selected(newVal) {
      this.$router.replace(`/new/${newVal}`);
      // if (newVal === 1) {
      //   this.$router.replace('/new/microtermes');
      // } else {
      //   this.$router.replace('/new/macrotermes');
      // }
    },
  },

  methods: {
    checkResult() {
      this.$store.commit('StoreResult/setResultReset', 'check');
    },

    resetData() {
      this.$store.commit('StoreResult/setResultReset', 'reset');
    },
  },
};
</script>
