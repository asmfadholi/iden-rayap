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
          <b-form-input
            v-model="class1.article_length"
            type="text"
            required
            placeholder="Enter Number" />
        </b-col>
        <b-col>
          <label> Labrum </label>
          <b-form-input
            v-model="class1.labrum"
            type="text"
            required
            placeholder="Enter Number" />
        </b-col>
      </b-row>

      <b-row v-else-if="class1.mandible_tooth.id === 2">
        <b-col cols="12">
          <label> Head shape </label>
          <vue-multiselect
            v-model="class1.head_shape"
            :options="options_head_shape"
            placeholder="Select one"
            label="label"
            track-by="label" />
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
          <vue-multiselect
            v-model="class1.concavity"
            :options="options_concavity"
            placeholder="Select one"
            label="label"
            track-by="label" />
        </b-col>
      </b-row>
    </div>
    <br>

    <div class="step-3">
      <b-row v-if="opsi_step2 === 1">
        <b-col>
          <label> Mandible's denticle  </label>
          <vue-multiselect
            v-model="class1.denticle"
            :options="options_denticle"
            placeholder="Select one"
            label="label"
            track-by="label" />
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


      },

      opsi_step2: null,

      options_head_shape: [
        {
          id: 1,
          label: 'rectangularly oval almost round',
          value: 'rectangularly oval almost round',
        },
        {
          id: 2,
          label: 'relongated oval, narrowed anteriorly',
          value: 'elongated oval, narrowed anteriorly',
        },
      ],
      options_mandible: [
        {
          id: 1,
          label: 'sharp pointed tooth near the tip',
          value: 'sharp pointed tooth near the tip',
        },
        {
          id: 2,
          label: 'no tooth or rudimentary tooth',
          value: 'no tooth or rudimentary tooth',
        },
      ],
      options_concavity: [
        {
          id: 1,
          label: 'Deep',
          value: 'Deep',
        },
        {
          id: 2,
          label: 'Shallow',
          value: 'Shallow',
        },
      ],
      options_denticle: [
        {
          id: 1,
          label: '+',
          value: '+',
        },
        {
          id: 2,
          label: '0',
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
  },
  methods: {
    checkStep2() {
      let opsi1 = 0;
      if (this.class1.concavity.id === 1) {
        opsi1 += 1;
      }

      if (this.class1.mandible_hookness >= 4 && this.class1.mandible_hookness <= 20) {
        opsi1 += 1;
      }

      if (this.class1.head_shape.id === 1) {
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
      } else {
        this.$emit('result', 'not found');
      }
    },
  },
};
</script>
