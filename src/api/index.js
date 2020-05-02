import axios from 'axios'
// import qs from 'qs'
// import { message } from 'antd'

// 创建axios实例
let instance = axios.create({
  baseURL: 'http://192.168.1.3:8080/',
  timeout: 60000
})
// axios.defaults.baseURL = "http://192.168.1.3:8080/";
// // 配置超时时间
// axios.defaults.timeout = 100000;


// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance