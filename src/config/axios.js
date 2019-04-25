import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://secret-river-12005.herokuapp.com/api/v1',
});

export default axiosInstance;
