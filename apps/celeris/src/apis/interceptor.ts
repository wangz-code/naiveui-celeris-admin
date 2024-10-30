import { useUserStore } from '@/store/modules/user';
import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const userStore = useUserStore();
    config.headers['Authorization'] = userStore.getToken;
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

const Post = <T>(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) => instance.post<any, T>(url, data, config);
const Get = <T>(url: string, config?: AxiosRequestConfig<any> | undefined) => instance.get<any, T>(url, config);

export { instance, Post, Get };
