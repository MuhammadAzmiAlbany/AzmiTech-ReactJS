import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Dashboard from './Dashboard.tsx'

import './css/loading-screen.css'
import './css/root.css'
import './css/theme-mapping.css'
import './css/main.css'
import './ts/main'

// import './index.css'
// import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
