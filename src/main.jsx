import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SidebarContextProvider from './contexts/SidebarContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </StrictMode>,
)
