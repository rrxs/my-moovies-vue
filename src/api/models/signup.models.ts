export type SignupRequest = {
  email: string;
  name: string;
  password: string;
}
export type SignupResponse = {
  accessToken: string;
  name: string;
  email: string;
}
