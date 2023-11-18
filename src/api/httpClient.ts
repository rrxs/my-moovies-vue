import axios, { type InternalAxiosRequestConfig } from 'axios'
import { getToken, logout } from './auth.api'
import router from '../router'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

httpClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Authorization'] = `Bearer ${getToken()}`
  return config
})

httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      logout()
      router.push('login')
    }
    return error
  }
)

export default httpClient
