export type LoginArg = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

type ResultCode = 0 | 1 | 10

type ApiResponseBase = {
  resultCode: ResultCode
  messages: string[]
  fieldsErrors: {
    field: string
    error: string
  }[]
}

type DataResponse<T> = ApiResponseBase & {
  data: T
}

export type LogoutResponse = ApiResponseBase

export type LoginResponse = DataResponse<{ userId: number }>

export type FetchUserMeResponse = DataResponse<{
  id: number
  email: string
  login: string
}>

export type GetCaptchaUrlResponse = {
  url: string
}
