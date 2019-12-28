<template>
  <div v-if="!data_container.result">
    <div class="step-3">
      <b-row v-if="data_container.next_step === 1">
        <b-col>
          <label> Mandible's denticle  </label>
          <b-form-select
            v-model="class1.denticle"
            :options="options_denticle"
          />
        </b-col>
      </b-row>

      <b-row v-else>
        <b-col>
          <label> Labrum's shape  </label>
          <b-form-select
            v-model="class1.labrum_shape"
            :options="options_labrum_shape"
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
      data_container: {
        result: null,
        next_step: null,
      },
      class1: {
        denticle: null,
        labrum_shape: null,
        result: null,
        next_step: null,
      },
      options_denticle: [
        {
          id: 1,
          label: '+',
          text: '+',
          value: 1,
        },
        {
          id: 2,
          label: '0',
          text: '0',
          value: 2,
        },
      ],
      options_labrum_shape: [
        {
          id: 1,
          label: 'lancet shape',
          text: 'lancet shape',
          value: 'lancet shape',
        },
        {
          id: 2,
          label: 'lancet shape',
          text: 'lancet shape',
          value: 'lancet shape',
        },
        {
          id: 3,
          label: 'elongated thin tounge shape',
          text: 'elongated thin tounge shape ',
          value: 'elongated thin tounge shape ',
        },
      ],
    };
  },
  watch: {
    data: {
      handler(val) {
        this.data_container = val;
        this.class1 = {
          denticle: null,
          labrum_shape: null,
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
      if (val.denticle) {
        // eslint-disable-next-line
        val.next_step = val.denticle;
        this.$emit('phaseThree', val);
      } else {
        this.$emit('phaseThree', null);
      }
    },

    checkTwo(val) {
      if (val.labrum_shape) {
        // eslint-disable-next-line
        val.next_step = val.labrum_shape;
        this.$emit('phaseThree', val);
      } else {
        this.$emit('phaseThree', null);
      }
    },
  },

};
</script>
