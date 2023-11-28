import axios from 'axios';
import { UseUser } from './UserContext'; // Adjust the path accordingly

const setupAxiosInterceptors = () => {
  const { user } = UseUser();

  axios.interceptors.request.use(
    (config) => {
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptors;
