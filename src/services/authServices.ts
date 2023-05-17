import { LoginResponseI, SignupResponseI, UserI } from '../types/AuthTypes'
import { api } from '../utils/api'

export const userLogin = async ({ username, password }: UserI): Promise<LoginResponseI> => {
  return await api.post('/user/login', { username, password }).then((response) => response.data)
}

export const userSignup = async ({ firstName, lastName, username, password }: UserI): Promise<SignupResponseI> => {
  return await api.post('/user/signup', { firstName, lastName, username, password }).then((response) => response.data)
}
