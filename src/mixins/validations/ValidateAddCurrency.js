import { required } from 'vuelidate/lib/validators';

export default {
  validations() {
    return {
      value: { required },
    };
  },
};
