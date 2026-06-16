// src/layouts/MainLayout.tsx
import type { ReactNode } from 'react';
import { closeMob } from '../ts/main.ts'
import Topbar from './topbar';
import Sidebar from './sidebar';
import Bottombar from './bottombar';
import LoadingScreen from '../components/LoadingScreen.tsx';
import '../ts/loading-screen'


// 1. Define the type contract for the props using an Interface
interface MainLayoutProps {
    children: ReactNode;
}

// 2. Type the destructured props argument directly in the function signature
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <LoadingScreen/>
            <div className='sb-overlay' id='sbOverlay' onClick={ closeMob }></div>

            <div className='layout'>
                <Sidebar />
                <div className='layout-body'>
                    <Topbar />
                    <main className='main' id='mainContent'>
                        {children} {/* Safely typed and rendered */}
                    </main>
                    <Bottombar />
                </div>

            </div>
        </div>
    );
}