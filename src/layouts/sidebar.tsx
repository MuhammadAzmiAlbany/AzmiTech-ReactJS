import { toggleSb, sbActive } from '../ts/main.ts'
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
    return (
        <>
            <aside className="sidebar" id="sidebar">
                {/* Logo */}
                <div className="sb-logo">
                    <div className="sb-logo-mark">AD</div>
                    <span className="sb-logo-name">AdminDash</span>
                </div>
                {/* Navigation */}
                <nav className="sb-nav">
                    <div className="sb-section">Main</div>
                    <NavLink to="/" className="sb-item">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x={3} y={3} width={7} height={7} />
                            <rect x={14} y={3} width={7} height={7} />
                            <rect x={14} y={14} width={7} height={7} />
                            <rect x={3} y={14} width={7} height={7} />
                        </svg>
                        <span className="sb-label">Dashboard</span>
                    </NavLink>
                    <NavLink to="/menu" className="sb-item">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x={3} y={3} width={7} height={7} />
                            <rect x={14} y={3} width={7} height={7} />
                            <rect x={14} y={14} width={7} height={7} />
                            <rect x={3} y={14} width={7} height={7} />
                        </svg>
                        <span className="sb-label">Menu</span>
                    </NavLink>
                    <NavLink to="/users" className="sb-item">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span className="sb-label">Users</span>
                        <span className="sb-badge">24</span>
                    </NavLink>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={18} y1={20} x2={18} y2={10} />
                            <line x1={12} y1={20} x2={12} y2={4} />
                            <line x1={6} y1={20} x2={6} y2={14} />
                        </svg>
                        <span className="sb-label">Analytics</span>
                    </div>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        <span className="sb-label">Orders</span>
                        <span className="sb-badge">7</span>
                    </div>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x={2} y={3} width={20} height={14} rx={2} />
                            <line x1={8} y1={21} x2={16} y2={21} />
                            <line x1={12} y1={17} x2={12} y2={21} />
                        </svg>
                        <span className="sb-label">Content</span>
                    </div>
                    <div className="sb-section">System</div>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={3} />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                        <span className="sb-label">Settings</span>
                    </div>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                            <line x1={6} y1={1} x2={6} y2={4} />
                            <line x1={10} y1={1} x2={10} y2={4} />
                            <line x1={14} y1={1} x2={14} y2={4} />
                        </svg>
                        <span className="sb-label">Reports</span>
                    </div>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M12 8v4l3 3" />
                        </svg>
                        <span className="sb-label">Activity Log</span>
                    </div>
                    <div className="sb-item" onClick={(e) => sbActive(e.currentTarget)}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <span className="sb-label">Integrations</span>
                    </div>
                </nav>
                {/* Collapse button */}
                <button className="sb-collapse" onClick={() => toggleSb}>
                    <svg
                        className="chevron"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span className="collapse-lbl">Collapse sidebar</span>
                </button>
            </aside>

        </>
    );
}