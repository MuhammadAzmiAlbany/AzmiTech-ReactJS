import { toggleDD, toggleTheme, openMob } from '../ts/main.ts'


export default function Topbar() {
    return (
        <>
            <header className="topbar" id="topbar">
                {/* Mobile hamburger */}
                <button className="mob-menu ib" onClick={openMob}>
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
                        <line x1={3} y1={6} x2={21} y2={6} />
                        <line x1={3} y1={12} x2={21} y2={12} />
                        <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                </button>
                {/* Breadcrumb */}
                <div className="topbar-bc">
                    <span>Dashboard</span>
                    <span className="bc-sep">/</span>
                    <span className="bc-cur">Overview</span>
                </div>
                {/* Actions */}
                <div className="tb-actions">
                    {/* Notifications */}
                    <button className="ib" title="Notifications">
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        <span className="notif-dot" />
                    </button>
                    {/* Theme toggle */}
                    <button
                        className="tb-theme"
                        id="themeBtn"
                        title="Toggle theme"
                        onClick={toggleTheme}
                    >
                        <svg
                            id="themeIco"
                            width={17}
                            height={17}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={5} />
                            <line x1={12} y1={1} x2={12} y2={3} />
                            <line x1={12} y1={21} x2={12} y2={23} />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1={1} y1={12} x2={3} y2={12} />
                            <line x1={21} y1={12} x2={23} y2={12} />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    </button>
                    {/* Gear dropdown */}
                    <div className="dd-wrap">
                        <button className="ib" title="Settings" onClick={() => toggleDD('gearDD')}>
                            <svg
                                width={17}
                                height={17}
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
                        </button>
                        <div className="dd-menu" id="gearDD">
                            <div className="dd-head">Configuration</div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                                Profile Settings
                            </div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <rect x={3} y={11} width={18} height={11} rx={2} />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                Security
                            </div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                                Integrations
                            </div>
                            <div className="dd-div" />
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 8v4l3 3" />
                                </svg>
                                System Logs
                            </div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <polyline points="23 4 23 10 17 10" />
                                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                                </svg>
                                Reset Config
                            </div>
                        </div>
                    </div>
                    {/* User dropdown */}
                    <div className="dd-wrap">
                        <button className="tb-user" onClick={() => toggleDD('userDD')}>
                            <div className="tb-avatar">JD</div>
                            <div className="tb-user-info">
                                <span className="tb-user-name">John Doe</span>
                                <span className="tb-user-role">Super Admin</span>
                            </div>
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: "var(--text-lo)", marginLeft: 3 }}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        <div className="dd-menu" id="userDD">
                            <div className="dd-head">Account</div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                                View Profile
                            </div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M18 20V10" />
                                    <path d="M12 20V4" />
                                    <path d="M6 20v-6" />
                                </svg>
                                My Analytics
                            </div>
                            <div className="dd-item">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                </svg>
                                Billing
                            </div>
                            <div className="dd-div" />
                            <div className="dd-item red">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1={21} y1={12} x2={9} y2={12} />
                                </svg>
                                Sign Out
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}