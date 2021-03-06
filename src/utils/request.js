
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})
instance.interceptors.request.use((request) => {
  return request
}, (error) => {
  return Promise.reject(error)
})
instance.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})
export default instance
