// 对 axios的封装
import axios from 'axios'
// create axios instance 这个和axios直接用一样 目的是不污染axios本身
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})
// 请求request拦截
instance.interceptors.request.use((request) => {
  // 发送请求钱需要做些什么
  return request
}, (error) => {
  return Promise.reject(error)
})
// 添加response拦截
instance.interceptors.response.use((response) => {
  // 发送请求钱需要做些什么
  return response.data
}, (error) => {
  return Promise.reject(error)
})
// export this instance
export default instance
