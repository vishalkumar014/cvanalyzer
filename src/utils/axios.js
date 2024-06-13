import axios from 'axios';
const customApiBaseUrl = 'http://127.0.0.1:8000';

const axiosServices = axios.create({
  baseURL: customApiBaseUrl
});

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosServices;