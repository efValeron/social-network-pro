import React from "react"
import ReactDOM from "react-dom/client"
import "./globals.css"
import { App } from "@/app/App.tsx"
import { Providers } from "@/common/components/providers/Providers.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
