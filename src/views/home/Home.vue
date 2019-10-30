<template>
  <div class="Home">
    <div>

      <b-container
        class="container-card"
        fluid>
        <b-row>

          <b-col />

          <b-col
            class="content-currency"
            cols="12"
            sm="8"
            md="6"
            lg="5">
            <classificationv1
              ref="classification1"
              @result="resultData"/>
            <br>
            <b-button @click="checkData">Submit</b-button>
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

export default {
  name: 'Home',
  components: {
    classificationv1,
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

    checkData() {
      this.$refs.classification1.checkResult();
    },
  },
};
</script>
