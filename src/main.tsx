import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Menu from './pages/Menu'
import MenuCreate from './pages/MenuCreate';
import Settings from './pages/Settings'
import MainLayout from './layouts/mainlayout';
import LoadingScreen from './components/LoadingScreen';

import './css/loading-screen.css'
import './css/root.css'
import './css/theme-mapping.css'
import './css/main.css'
import './ts/main'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/create" element={<MenuCreate />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
)
