import axios from 'axios';
import StoreCurrency from '@/stores/modules/StoreCurrency';

export default {
  generateApi() {
    const api = axios.create({
      baseURL: 'https://api.exchangeratesapi.io/',
      params: {
        base: StoreCurrency.state.currency_state.base_currency !== null ?
          StoreCurrency.state.currency_state.base_currency.currency : 'USD',
      },
    });
    return api;
  },
};
