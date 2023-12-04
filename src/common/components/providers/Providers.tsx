import { ReactNode } from "react"
import { ThemeProvider } from "@/common/components/providers/ThemeProvider.tsx"
import { BrowserRouter } from "react-router-dom"

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  )
}