import axios from 'axios';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'https://secret-river-12005.herokuapp.com/api/v1',
  headers: {
    'x-access-token': token,
  }
});

export default axiosInstance;
