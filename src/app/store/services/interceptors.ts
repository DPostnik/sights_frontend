import {AxiosError, AxiosRequestConfig} from 'axios';

export const onFulfilledRequest = (request: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers = {
            ...request.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return request;
};

export const onRejectedRequest = (error: AxiosError) => {
    return Promise.reject(error);
};
