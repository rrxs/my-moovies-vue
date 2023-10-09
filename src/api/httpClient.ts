import axios, { type InternalAxiosRequestConfig } from 'axios'
import { getToken } from './auth.api'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers['Authorization'] = `Bearer ${getToken()}`
  return config
}

httpClient.interceptors.request.use(authInterceptor)

export default httpClient
