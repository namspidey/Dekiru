import axios from "axios";

// Lấy URL từ biến môi trường
const API_URL = "https://lombeo-api-authorize.azurewebsites.net";

const axiosInstance = axios.create({
  baseURL: API_URL, // Đảm bảo API_URL đã được định nghĩa
  headers: {
    'Content-Type': 'application/json',
  },
});

// Nếu bạn có hàm getRequestHeaders, hãy định nghĩa nó ở đây
const getRequestHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: token ? `Bearer ${token}` : '',
  };
};

// Sử dụng getRequestHeaders trong interceptor nếu cần
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers, ...getRequestHeaders() }; // Thêm headers
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
