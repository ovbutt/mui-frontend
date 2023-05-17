export interface UserI {
  firstName?: string
  lastName?: string
  username: string
  password: any
}
export interface LoginResponseI {
  success: boolean
  status: number
  message: string
  user: UserI
}
export interface SignupResponseI {
  success: boolean
  status: number
  message: string
  user: UserI
}
