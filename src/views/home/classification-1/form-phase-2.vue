<template>
  <div>
    <div class="step-2">
      <b-row v-if="data.mandible_tooth.id === 1">
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

      <b-row v-else>
        <b-col cols="12">
          <label> Head shape </label>
          <b-form-select
            v-model="class1.head_shape"
            :options="options_head_shape"
          />
        </b-col>

        <b-col>
          <!-- <label> Mandible hookness (1-10) </label>
          <b-form-input
            v-model.number="class1.mandible_hookness"
            :min="0"
            :max="10"
            type="number"
            required
            placeholder="Enter Number" /> -->
          <label> Mandible hookness (1-10) </label>
          <b-form-select
            v-model="class1.mandible_hookness"
            :options="options_mandible_hookness"
          />
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
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Array, Object, Number, Boolean],
      default: null,
    },
  },
  data() {
    return {
      class1: {
        article_antenna: null,
        article_length: null,
        labrum: null,
        head_shape: null,
        mandible_hookness: null,
        concavity: null,
        is_next: false,
        result: null,
      },
      options_article_length: [
        {
          id: 1,
          label: '(2) = (3+4)',
          text: '(2) = (3+4)',
          value: '(2) = (3+4)',
        },
      ],

      options_concavity: [
        {
          id: 1,
          label: 'deep',
          text: 'deep',
          value: 1,
        },
        {
          id: 2,
          label: 'shallow',
          text: 'shallow',
          value: 2,
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
          value: 1,
        },
        {
          id: 2,
          label: 'relongated oval, narrowed anteriorly',
          text: 'relongated oval, narrowed anteriorly',
          value: 2,
        },
      ],
      options_mandible_hookness: [
        {
          id: 1,
          label: 'strongly hooked (++++ --> +++++++)',
          text: 'strongly hooked (++++ --> +++++++)',
          value: 1,
        },
        {
          id: 2,
          label: 'strongly hooked (++++ --> +++++++)',
          text: 'strongly hooked (++++ --> +++++++)',
          value: 2,
        },
      ],
    };
  },
  watch: {
    data() {
      this.class1 = {
        article_antenna: null,
        article_length: null,
        labrum: null,
        head_shape: null,
        mandible_hookness: null,
        concavity: null,
        next_step: null,
        result: null,
      };
    },
    class1: {
      handler(val) {
        if (this.data.mandible_tooth.id === 1) {
          this.checkOne(val);
        } else {
          this.checkTwo(val);
        }
      },
      deep: true,
    },
  },
  methods: {
    checkOne(val) {
      if (val.article_antenna && val.article_length && val.labrum) {
        // eslint-disable-next-line
        val.result = 'globicola';
        this.$emit('phaseTwo', val);
      } else {
        this.$emit('phaseTwo', null);
      }
    },

    checkTwo(val) {
      if (val.head_shape && val.mandible_hookness && val.concavity) {
        const var1 = val.head_shape === 1 ? 1 : 0;
        const var2 = val.mandible_hookness === 1 ? 1 : 0;
        const var3 = val.concavity === 1 ? 1 : 0;
        const total = var1 + var2 + var3;
        if (total >= 2) {
          // eslint-disable-next-line
          val.next_step = 1;
        } else {
          // eslint-disable-next-line
          val.next_step = 2;
        }

        // eslint-disable-next-line
        val.result = null;
        this.$emit('phaseTwo', val);
      } else {
        this.$emit('phaseTwo', null);
      }
    },
  },

};
</script>
