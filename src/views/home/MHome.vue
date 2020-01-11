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
              Result: <i>{{ result_state.result }}</i>
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
      selected: 1,
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
    selected(newVal) {
      if (newVal === 1) {
        this.$router.replace('/new/microtermes');
      } else {
        this.$router.replace('/new/macrotermes');
      }
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
