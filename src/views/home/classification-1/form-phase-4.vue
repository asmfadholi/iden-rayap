<template>
  <div v-if="!data_container.result">
    <div class="step-4">
      <b-row v-if="data_container.next_step === 1">
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
        antena_article3: null,
        antena_length3: null,
        labrum_shape3: null,

        result: null,
        next_step: null,
      },
      options_antena_length3: [
        {
          id: 1,
          label: '(2) ~> (3)',
          text: '(2) ~> (3)',
          value: '(2) ~> (3)',
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
    };
  },

  watch: {
    data: {
      handler(val) {
        this.data_container = val;
        this.class1 = {
          antena_article3: null,
          antena_length3: null,
          labrum_shape3: null,
          result: null,
          next_step: null,
        };
      },
      deep: true,
    },
    class1: {
      handler(val) {
        if (this.data_container.next_step === 1) {
          this.checkOne(val);
        } else {
          this.checkTwo(val);
        }
      },
      deep: true,
    },
  },
  created() {
    this.data_container = this.data;
  },
  methods: {
    checkOne(val) {
      if (val.antena_article3 && val.antena_length3 && val.labrum_shape3) {
        // eslint-disable-next-line
        val.next_step = null;
        // eslint-disable-next-line
        val.result = 'insepratus';
        this.$emit('phaseFour', val);
      } else {
        this.$emit('phaseFour', null);
      }
    },

    checkTwo(val) {
      if (val.labrum_shape) {
        // eslint-disable-next-line
        val.next_step = val.labrum_shape;
        this.$emit('phaseFour', val);
      } else {
        this.$emit('phaseFour', null);
      }
    },
  },

};
</script>
