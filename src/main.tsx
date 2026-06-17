import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Menu from './pages/Menu'
import Settings from './pages/Settings'
import MainLayout from './layouts/mainlayout';

import './css/loading-screen.css'
import './css/root.css'
import './css/theme-mapping.css'
import './css/main.css'
import './ts/main'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <Dashboard />
  // </StrictMode>,
  // 1. BrowserRouter wraps your whole app and enables the routing magic
    <BrowserRouter>
      
      {/* 2. Place the Layout here so it persists across all pages */}
      <MainLayout>
        
        {/* 3. Routes acts like a switchboard. It looks at the URL and renders the matching component */}
        <Routes>
          {/* Equivalent to: Route::get('/', [DashboardController::class, 'index']) */}
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/users" element={<Users />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* A catch-all for 404 pages */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        
      </MainLayout>
      
    </BrowserRouter>
)
