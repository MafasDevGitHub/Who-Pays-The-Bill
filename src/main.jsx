import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MyProvider } from './context'

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>
)
