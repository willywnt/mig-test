import axios from '../api/axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCustomerList: async function (payload, controller) {
    try {
      const response = await axios.post('/customers', payload, config, { signal: controller.signal });
      return response;
    } catch (err) {
      throw err;
    }
  },
  addCustomer: async function (payload) {
    try {
      const response = await axios.post(`/customers/${payload._token}`, config);
      return response;
    } catch (err) {
      throw err;
    }
  },
  deleteCustomer: async function (payload) {
    try {
      const response = await axios.delete(`/customers/${payload.id}/${payload._token}`, config);
      return response;
    } catch (err) {
      throw err;
    }
  }
}