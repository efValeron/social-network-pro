import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  FetchUserMeResponse,
  GetCaptchaUrlResponse,
  LoginArg,
  LoginResponse,
  LogoutResponse,
} from "@/features/auth/api/authApi.types"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-network.samuraijs.com/api/1.0",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchUserMe: builder.query<FetchUserMeResponse, void>({
      query: () => ({
        url: "/auth/me",
      }),
    }),
    login: builder.mutation<LoginResponse, LoginArg>({
      query: (body) => ({
        method: "POST",
        url: "/auth/login",
        body,
      }),
    }),
    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        method: "POST",
        url: "/auth/logout",
      }),
    }),
    getCaptchaUrl: builder.query<GetCaptchaUrlResponse, void>({
      query: () => ({
        url: "security/get-captcha-url",
      }),
    }),
  }),
})

export const {
  useFetchUserMeQuery,
  useLoginMutation,
  useLazyFetchUserMeQuery,
  useLogoutMutation,
  useLazyGetCaptchaUrlQuery,
} = authApi
