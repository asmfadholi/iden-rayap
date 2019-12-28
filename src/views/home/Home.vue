<template>
  <div class="Home">
    <div>
      <b-button
        variant="danger"
        @click="resetData">Reset</b-button>
      <b-container
        class="container-card"
        fluid>
        <b-row>

          <b-col />

          <b-col
            class="content-currency"
            cols="12"
            sm="12"
            md="8"
            lg="8">
            <!-- <classificationv1
              ref="classification1"
              @result="resultData"/> -->
            <classificationOne
              ref="classification1"
              @result="resultData"/>
            <br>
            <b-button
              variant="success"
              @click="checkData">Submit</b-button>
            <br>
            <br>
            Spesies: {{ result }}
          </b-col>

          <b-col />

        </b-row>
      </b-container>

    </div>
  </div>
</template>

<script>
import classificationv1 from './Classification1';
import classificationOne from './classification-1/Classification1';

export default {
  name: 'Home',
  components: {
    classificationv1,
    classificationOne,
  },

  data() {
    return {
      result: null,
    };
  },

  watch: {
  },

  methods: {
    resultData(data) {
      this.result = data;
    },

    resetData() {
      this.$refs.classification1.reset();
      this.result = null;
    },

    checkData() {
      this.$refs.classification1.checkResult();
    },
  },
};
</script>
