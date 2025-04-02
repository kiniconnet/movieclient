import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export const BASE_URL = import.meta.env.MODE === "development" ? "https://movies.leapcell.app/api" : "/api"

 

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
