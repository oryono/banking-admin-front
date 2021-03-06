import axios from 'axios';

const token = localStorage.getItem('credentials')
  ? JSON.parse(localStorage.getItem('credentials')).access_token
  : null;

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token ? token : null}`,
  },
});
