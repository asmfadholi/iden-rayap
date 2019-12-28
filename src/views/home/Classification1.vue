<template>
  <div>
    <h3> Microtermes </h3>
    <div class="step-1">
      <b-row>
        <b-col>
          <b-form-group class="form-number">
            <label> Left mandible tooth </label>
            <vue-multiselect
              v-model="class1.mandible_tooth"
              :options="options_mandible"
              placeholder="Select one"
              label="label"
              track-by="label" />
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <div class="step-2">
      <div v-if="!class1.mandible_tooth"/>
      <b-row v-else-if="class1.mandible_tooth.id === 1">
        <b-col>
          <label> Antenna articles </label>
          <b-form-input
            v-model.number="class1.article_antenna"
            type="number"
            required
            placeholder="Enter Number" />
        </b-col>
        <b-col>
          <label> Articles length </label>
          <b-form-select
            v-model="class1.article_length"
            :options="options_article_length"
          />
        </b-col>
        <b-col>
          <label> Labrum </label>
          <b-form-select
            v-model="class1.labrum"
            :options="options_labrum"
          />
        </b-col>
      </b-row>

      <b-row v-else-if="class1.mandible_tooth.id === 2">
        <b-col cols="12">
          <label> Head shape </label>
          <b-form-select
            v-model="class1.head_shape"
            :options="options_head_shape"
          />
        </b-col>

        <b-col>
          <label> Mandible hookness (1-10) </label>
          <b-form-input
            v-model.number="class1.mandible_hookness"
            :min="0"
            :max="10"
            type="number"
            required
            placeholder="Enter Number" />
        </b-col>
        <b-col>
          <label> Base outer margin concavity </label>
          <b-form-select
            v-model="class1.concavity"
            :options="options_concavity"
          />
        </b-col>
      </b-row>
    </div>
    <br>

    <div class="step-3">
      <b-row v-if="opsi_step2 === 1">
        <b-col>
          <label> Mandible's denticle  </label>
          <b-form-select
            v-model="class1.denticle"
            :options="options_denticle"
          />
        </b-col>
      </b-row>

    </div>

    <div class="step-4">
      <b-row v-if="opsi_step3 === 1">
        <b-col>
          <label> antenna articles   </label>
          <!-- <b-form-select
            v-model="class1.antena_articles"
            :options="options_denticle"
          /> -->
          <b-form-input
            v-model.number="class1.antena_article3"
            :min="0"
            :max="20"
            type="number"
            required
            placeholder="Enter Number" />
        </b-col>
        <b-col>
          <label> articles length </label>
          <b-form-select
            v-model="class1.antena_length3"
            :options="options_antena_length3"
          />
        </b-col>
        <b-col>
          <label> Labrum shape  </label>
          <b-form-select
            v-model="class1.labrum_shape3"
            :options="options_labrum_shape3"
          />
        </b-col>
      </b-row>

      <b-row v-if="opsi_step3 === 2">
        <b-col cols="6">
          <label> Mandible hookness (2)  </label>
          <b-form-select
            v-model="class1.mandible_hookness3"
            :options="options_mandible_hookness3"
          />
        </b-col>
        <b-col cols="6">
          <label> incurved tips </label>
          <b-form-select
            v-model="class1.incurved_tips3"
            :options="options_incurved_tips3"
          />
        </b-col>

        <b-col cols="6">
          <label> Head's hair </label>
          <b-form-select
            v-model="class1.head_hair3"
            :options="options_head_hair3"
          />
        </b-col>

        <b-col cols="6">
          <label> antenna articles </label>
          <b-form-select
            v-model="class1.antenna_articles3"
            :options="options_antenna_articles3"
          />
        </b-col>

        <b-col cols="6">
          <label> Head length with mandible  </label>
          <b-form-select
            v-model="class1.head_length_with_mandible3"
            :options="options_head_length_with_mandible3"
          />
        </b-col>

        <b-col cols="6">
          <label> articles length </label>
          <b-form-select
            v-model="class1.articles_length3"
            :options="options_articles_length3"
          />
        </b-col>

        <b-col cols="6">
          <label> labrum dimension  </label>
          <b-form-select
            v-model="class1.labrum_dimension"
            :options="options_labrum_dimension"
          />
        </b-col>

        <b-col cols="6">
          <label> Labrums tip shape </label>
          <b-form-select
            v-model="class1.labrums_tip_shape"
            :options="options_labrums_tip_shape"
          />
        </b-col>
      </b-row>
    </div>


  </div>
</template>

<script>

export default {
  data() {
    return {
      result: null,
      class1: {
        mandible_tooth: null,

        article_antenna: null,
        article_length: null,
        labrum: null,

        head_shape: null,
        mandible_hookness: null,
        concavity: null,

        denticle: null,

        // step 3
        antena_article3: null,
        antena_length3: null,
        labrum_shape3: null,

        mandible_hookness3: null,
        incurved_tips3: null,

        head_hair3: null,
        antenna_articles3: null,
        head_length_with_mandible3: null,
        articles_length3: null,
        labrum_dimension: null,
        labrums_tip_shape: null,
      },

      opsi_step2: null,
      opsi_step3: null,
      options_labrums_tip_shape: [
        {
          id: 1,
          label: 'broadly rounded',
          text: 'broadly rounded',
          value: 'broadly rounded',
        },
        {
          id: 4,
          label: 'not mentioned',
          text: 'not mentioned',
          value: 'not mentioned',
        },
      ],
      options_labrum_dimension: [
        {
          id: 1,
          label: 'L ~> W',
          text: 'L ~> W',
          value: 'L ~> W',
        },
        {
          id: 3,
          label: 'L < 0.75 (left mandible)',
          text: 'L < 0.75 (left mandible)',
          value: 'L < 0.75 (left mandible)',
        },
        {
          id: 4,
          label: 'not mentioned',
          text: 'not mentioned',
          value: 'not mentioned',
        },
      ],
      options_articles_length3: [
        {
          id: 1,
          label: '(2) = (3+4)',
          text: '(2) = (3+4)',
          value: '(2) = (3+4)',
        },
        {
          id: 3,
          label: 'not mentioned',
          text: 'not mentioned',
          value: 'not mentioned',
        },
      ],
      options_antenna_articles3: [
        {
          id: 1,
          label: '15',
          text: '15',
          value: '15',
        },
        {
          id: 3,
          label: 'not mentioned',
          text: 'not mentioned',
          value: 'not mentioned',
        },
      ],
      options_head_length_with_mandible3: [
        {
          id: 1,
          label: 'L : 1.4 - 1.5',
          text: 'L : 1.4 - 1.5',
          value: 'L : 1.4 - 1.5',
        },
        {
          id: 2,
          label: 'L : 1.3 - 1.4',
          text: 'L : 1.3 - 1.4',
          value: 'L : 1.3 - 1.4',
        },
        {
          id: 3,
          label: 'not mentioned',
          text: 'not mentioned',
          value: 'not mentioned',
        },
      ],
      options_head_hair3: [
        {
          id: 1,
          label: '+',
          text: '+',
          value: '+',
        },
        {
          id: 2,
          label: 'not mentioned',
          text: 'not mentioned',
          value: 'not mentioned',
        },
      ],
      options_incurved_tips3: [
        {
          id: 1,
          label: 'antero laterally',
          text: 'antero laterally',
          value: 'antero laterally',
        },
        {
          id: 2,
          label: 'latero laterally',
          text: 'latero laterally',
          value: 'latero laterally',
        },
      ],
      options_mandible_hookness3: [
        {
          id: 1,
          label: '++++',
          text: '++++',
          value: '++++',
        },
        {
          id: 2,
          label: '+++++++',
          text: '+++++++',
          value: '+++++++',
        },
      ],
      options_labrum_shape3: [
        {
          id: 1,
          label: 'toungue shape',
          text: 'toungue shape',
          value: 'toungue shape',
        },
      ],
      options_antena_length3: [
        {
          id: 1,
          label: '(2) ~> (3)',
          text: '(2) ~> (3)',
          value: '(2) ~> (3)',
        },
      ],
      options_article_length: [
        {
          id: 1,
          label: '(2) = (3+4)',
          text: '(2) = (3+4)',
          value: '(2) = (3+4)',
        },
      ],

      options_labrum: [
        {
          id: 1,
          label: 'triangle, pointed',
          text: 'triangle, pointed',
          value: 'triangle, pointed',
        },
      ],
      options_head_shape: [
        {
          id: 1,
          label: 'rectangularly oval almost round',
          text: 'rectangularly oval almost round',
          value: 'rectangularly oval almost round',
        },
        {
          id: 2,
          label: 'relongated oval, narrowed anteriorly',
          text: 'relongated oval, narrowed anteriorly',
          value: 'elongated oval, narrowed anteriorly',
        },
      ],
      options_mandible: [
        {
          id: 1,
          label: 'sharp pointed tooth near the tip',
          text: 'sharp pointed tooth near the tip',
          value: 'sharp pointed tooth near the tip',
        },
        {
          id: 2,
          label: 'no tooth or rudimentary tooth',
          text: 'no tooth or rudimentary tooth',
          value: 'no tooth or rudimentary tooth',
        },
      ],
      options_concavity: [
        {
          id: 1,
          label: 'deep',
          text: 'deep',
          value: 'deep',
        },
        {
          id: 2,
          label: 'shallow',
          text: 'shallow',
          value: 'shallow',
        },
      ],
      options_denticle: [
        {
          id: 1,
          label: '+',
          text: '+',
          value: '+',
        },
        {
          id: 2,
          label: '0',
          text: '0',
          value: '0',
        },
      ],
    };
  },
  watch: {
    // eslint-disable-next-line
    'class1.mandible_tooth': function(newVal) {
      if (!newVal) {
        this.class1.article_antenna = null;
        this.class1.article_length = null;
        this.class1.labrum = null;

        this.class1.head_shape = null;
        this.class1.mandible_hookness = null;
        this.class1.concavity = null;
      } else if (newVal.id === 1) {
        this.class1.article_antenna = null;
        this.class1.article_length = '(2) = (3+4)';
        this.class1.labrum = 'triangle, pointed';

        this.class1.head_shape = null;
        this.class1.mandible_hookness = null;
        this.class1.concavity = null;
      } else if (newVal.id === 2) {
        this.class1.article_antenna = null;
        this.class1.article_length = null;
        this.class1.labrum = null;

        this.class1.head_shape = null;
        this.class1.mandible_hookness = null;
        this.class1.concavity = null;
      }
    },

    // eslint-disable-next-line
    'class1.head_shape': function(newVal) {
      this.opsi_step2 = null;
      if (newVal && this.class1.mandible_hookness && this.class1.concavity) {
        this.checkStep2();
      }
    },

    // eslint-disable-next-line
    'class1.mandible_hookness': function(newVal) {
      this.opsi_step2 = null;
      if (newVal && this.class1.head_shape && this.class1.concavity) {
        this.checkStep2();
      }
    },

    // eslint-disable-next-line
    'class1.concavity': function(newVal) {
      this.opsi_step2 = null;
      if (newVal && this.class1.mandible_hookness && this.class1.head_shape) {
        this.checkStep2();
      }
    },

    // eslint-disable-next-line
    'class1.denticle': function(newVal) {
      this.opsi_step3 = null;
      if (newVal === '+') {
        this.opsi_step3 = 1;
      } else {
        this.opsi_step3 = 2;
      }
    },

    // // eslint-disable-next-line
    // 'class1.head_shape': function(newVal) {
    //   let totalOpsi1 = 0;
    //   let totalOpsi2 = 0;

    //   if (this.class1.head_shape !== null && this.class1.mandible_hookness !== null && this.class1.concavity !== null) {
    //     const headShape = newVal === 'rectangularly oval almost round' ? (totalOpsi1 += 1) : (totalOpsi2 += 1);
    //     const mandibleHookness = this.class1.mandible_hookness > 3 ? (totalOpsi1 += 1) : (totalOpsi2 += 1);
    //     const concavity = this.class1.concavity === 'deep' ? (totalOpsi1 += 1) : (totalOpsi2 += 1);
    //   }

    //   if (totalOpsi1 > totalOpsi2) {
    //     this.o
    //   }
    // },
  },
  methods: {
    reset() {
      this.class1 = {
        mandible_tooth: null,

        article_antenna: null,
        article_length: null,
        labrum: null,

        head_shape: null,
        mandible_hookness: null,
        concavity: null,

        denticle: null,

        // step 3
        antena_article3: null,
        antena_length3: null,
        labrum_shape3: null,

        mandible_hookness3: null,
        incurved_tips3: null,

        head_hair3: null,
        antenna_articles3: null,
        head_length_with_mandible3: null,
        articles_length3: null,
        labrum_dimension: null,
        labrums_tip_shape: null,
      };
    },
    checkStep2() {
      let opsi1 = 0;
      if (this.class1.concavity === 'deep') {
        opsi1 += 1;
      }

      if (this.class1.mandible_hookness >= 4) {
        opsi1 += 1;
      }

      if (this.class1.head_shape === 'rectangularly oval almost round') {
        opsi1 += 1;
      }

      if (opsi1 >= 2) {
        this.opsi_step2 = 1;
      } else {
        this.opsi_step2 = 2;
      }
    },

    checkResult() {
      if (this.class1.mandible_tooth && this.class1.article_antenna && this.class1.article_length && this.class1.labrum) {
        this.result = 'globicola';
        this.$emit('result', this.result);
      } else if (this.class1.denticle === '+') {
        this.result = 'insepratus';
        this.$emit('result', this.result);
      } else if (this.class1.denticle === '0') {
        this.result = this.checkOrder3Deep();
        this.$emit('result', this.result);
      } else {
        this.$emit('result', 'not found');
      }
    },

    checkOrder3Deep() {
      const prop = this.class1;
      let chance1 = 0;
      let chance2 = 0;
      let chance3 = 0;

      if (prop.head_hair3 === '+') {
        chance1 += 1;
      } else {
        chance2 += 1;
        chance3 += 1;
      }

      if (prop.antenna_articles3 === 15) {
        chance1 += 1;
        chance2 += 1;
      } else {
        chance3 += 1;
      }

      if (prop.head_length_with_mandible3 === 'L : 1.4 - 1.5') {
        chance2 += 1;
      } else if (prop.head_length_with_mandible3 === 'L : 1.3 - 1.4') {
        chance3 += 1;
      } else {
        chance1 += 1;
      }

      if (prop.articles_length3 === '(2) = (3+4)') {
        chance2 += 1;
        chance1 += 1;
      } else {
        chance3 += 1;
      }

      if (prop.articles_length3 === 'L ~> W') {
        chance1 += 1;
      } else if (prop.articles_length3 === 'L < 0.75 (left mandible)') {
        chance2 += 1;
      } else {
        chance3 += 1;
      }

      if (prop.articles_length3 === 'broadly rounded') {
        chance1 += 1;
        chance2 += 1;
      } else {
        chance3 += 1;
      }

      const compare = chance1 >= chance2;

      if (compare === true) {
        const compareOrde2 = chance1 >= chance3;
        return compareOrde2 ? 'pakistanicus' : 'jacobsoni';
      }
      const compareOrde2 = chance2 >= chance3;
      return compareOrde2 ? 'pallidus' : 'jacobsoni';
    },
  },
};
</script>
