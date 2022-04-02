import axios from 'axios';
import {environment} from '../../../environments/environment';
import {onFulfilledRequest, onRejectedRequest} from './interceptors';

const axiosInstance = axios.create({
    baseURL: `${environment.apiUrl}`,
    timeout: 3000,
});

axiosInstance.interceptors.request.use(onFulfilledRequest, onRejectedRequest);

export default axiosInstance;
