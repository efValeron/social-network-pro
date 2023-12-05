import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useFetchUserMeQuery } from "@/features/auth/api/authApi"

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  let location = useLocation()
  const { data, isLoading, isSuccess } = useFetchUserMeQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isSuccess) {
    return null
  }

  console.log(data)

  if (data.resultCode !== 0) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
