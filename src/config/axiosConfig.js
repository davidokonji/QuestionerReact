import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://secret-river-12005.herokuapp.com/api/v1'
  // baseURL: process.env.BACKEND_URL
});
export default axiosInstance;
