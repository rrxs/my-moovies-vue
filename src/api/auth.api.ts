import httpClient from './httpClient'
import type { LoginRequest, LoginResponse } from './models/login.models'

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}
const getToken = () => {
  return localStorage.getItem('token')
}
const clearUserData = () => {
  return localStorage.clear()
}

const loginUser = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  const response = await httpClient.post<LoginResponse>('/api/login', loginRequest)
  saveToken(response.data.accessToken)
  return response.data
}

export { loginUser, getToken, clearUserData }
