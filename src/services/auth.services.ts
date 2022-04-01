import { api } from "./api/apiClient"

type createUserType = {
  email: string,
	password: string,
	passwordConfirmation: string
}

type recoverPasswordConfirmation = {
  token: string;
  password: string;
	passwordConfirmation: string;
}

export async function signUp(data: createUserType){ 
  const res = await api.post('/auth/signup', data);
  return res
}

export async function confirmAccountEmail(email: string) {
  const res = await api.post('/auth/send-confirmation-email/', { email })
  return res
}

export async function confirmAccount(token: string) {
  const res = await api.post(`/auth/confirm-email/${token}`)
  return res
}

export async function recoverPasswordEmail(email: string) {
  const res = await api.post('/auth/send-recover-email', { email })
  return res
}

export async function recoverPassword(data: recoverPasswordConfirmation) {
  const res = await api.patch(`/auth/reset-password/${data.token}`, { 
    password: data.password,
	  passwordConfirmation: data.passwordConfirmation
  })
  return res
}