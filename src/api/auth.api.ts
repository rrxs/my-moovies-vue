import httpClient from './httpClient'
import type { LoginRequest, LoginResponse } from './models/login.models'
import type { SignupRequest, SignupResponse } from './models/signup.models'

const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}
const getToken = () => {
  return localStorage.getItem('token')
}
const clearUserData = () => {
  return localStorage.clear()
}

const signin = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  const response = await httpClient.post<LoginResponse>('/api/auth/signin', loginRequest)
  saveToken(response.data.accessToken)
  return response.data
}

const signup = async (signupRequest: SignupRequest): Promise<SignupResponse> => {
  const response = await httpClient.post<SignupResponse>('/api/auth/signup', signupRequest)
  saveToken(response.data.accessToken)
  return response.data
}

const logout = () => {
  clearUserData()
}

export { signin, signup, getToken, logout }
