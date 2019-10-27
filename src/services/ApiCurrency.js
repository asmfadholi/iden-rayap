import Api from './Api';

export default {
  getCurrencyList() {
    const api = Api.generateApi();
    return api.get('latest')
      .then(res => res.data);
  },
};
