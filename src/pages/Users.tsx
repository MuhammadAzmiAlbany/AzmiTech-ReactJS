// src/pages/Dashboard.tsx
import {
    toggleCDD,
    toggleCsel,
    filterCsel,
    pickCsel,
    dzOver,
    dzLeave,
    dzDrop,
    dzSelect
} from '../ts/main'

export default function Users() {
    return (
        <>
            <div className="page-hdr">
                <div className="page-hdr-left">
                    <h1>Users 👋</h1>
                    <p>Sunday, June 14, 2026 — Here's your project snapshot for today.</p>
                </div>
                <div className="page-hdr-right">
                    <button className="btn btn-secondary btn-sm">
                        <svg
                            width={13}
                            height={13}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1={12} y1={15} x2={12} y2={3} />
                        </svg>
                        Export
                    </button>
                    <button className="btn btn-primary btn-sm">
                        <svg
                            width={13}
                            height={13}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                        New Report
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-lg-3">
                    <div className="stat-card">
                        <div
                            className="stat-icon"
                            style={{ background: "rgba(235,94,40,.12)" }}
                        >
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#eb5e28"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1={12} y1={1} x2={12} y2={23} />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </div>
                        <div className="stat-body">
                            <div className="stat-num">$128.4K</div>
                            <div className="stat-lbl">Total Revenue</div>
                            <span className="stat-trend up">↑ 12.4% vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="stat-card">
                        <div
                            className="stat-icon"
                            style={{ background: "rgba(99,102,241,.12)" }}
                        >
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#6366f1"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="stat-body">
                            <div className="stat-num">8,291</div>
                            <div className="stat-lbl">Active Users</div>
                            <span className="stat-trend up">↑ 8.1% vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="stat-card">
                        <div
                            className="stat-icon"
                            style={{ background: "rgba(20,184,166,.12)" }}
                        >
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </div>
                        <div className="stat-body">
                            <div className="stat-num">43</div>
                            <div className="stat-lbl">Pending Orders</div>
                            <span className="stat-trend dn">↓ 2.3% vs last month</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="stat-card">
                        <div
                            className="stat-icon"
                            style={{ background: "rgba(139,92,246,.12)" }}
                        >
                            <svg
                                width={22}
                                height={22}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#8b5cf6"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                <polyline points="17 6 23 6 23 12" />
                            </svg>
                        </div>
                        <div className="stat-body">
                            <div className="stat-num">3.47%</div>
                            <div className="stat-lbl">Conversion Rate</div>
                            <span className="stat-trend up">↑ 0.8% vs last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-hdr">
                            <div className="card-hdr-txt">
                                <div className="card-title">Monthly Revenue</div>
                                <div className="card-sub">
                                    Gross income by month — fiscal year 2024
                                </div>
                            </div>
                            <span className="card-tag">↑ 12.4%</span>
                        </div>
                        <div className="card-body">
                            <div className="chart-wrap">
                                <canvas id="barChart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-hdr">
                            <div className="card-hdr-txt">
                                <div className="card-title">User Growth</div>
                                <div className="card-sub">
                                    New registrations over the last 12 weeks
                                </div>
                            </div>
                            <span className="card-tag">↑ 8.1%</span>
                        </div>
                        <div className="card-body">
                            <div className="chart-wrap">
                                <canvas id="lineChart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">   
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-hdr">
                            <div className="card-hdr-txt">
                                <div className="card-title">Recent Transactions</div>
                                <div className="card-sub">
                                    Latest payment activity across all accounts
                                </div>
                            </div>
                            <span className="card-tag">Live</span>
                        </div>
                        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
                            <div className="tbl-wrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt">AL</div>Aria Liu
                                                </div>
                                            </td>
                                            <td>
                                                <strong>$1,240</strong>
                                            </td>
                                            <td>Jun 1</td>
                                            <td>
                                                <span className="pill ok">
                                                    <span className="pill-dot" />
                                                    Paid
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#6366f1" }}>
                                                        MK
                                                    </div>
                                                    Marco Klein
                                                </div>
                                            </td>
                                            <td>
                                                <strong>$380</strong>
                                            </td>
                                            <td>May 30</td>
                                            <td>
                                                <span className="pill warn">
                                                    <span className="pill-dot" />
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#14b8a6" }}>
                                                        SR
                                                    </div>
                                                    Sana Rauf
                                                </div>
                                            </td>
                                            <td>
                                                <strong>$2,090</strong>
                                            </td>
                                            <td>May 29</td>
                                            <td>
                                                <span className="pill ok">
                                                    <span className="pill-dot" />
                                                    Paid
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#f59e0b" }}>
                                                        DH
                                                    </div>
                                                    Dev Huang
                                                </div>
                                            </td>
                                            <td>
                                                <strong>$145</strong>
                                            </td>
                                            <td>May 28</td>
                                            <td>
                                                <span className="pill bad">
                                                    <span className="pill-dot" />
                                                    Failed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#ec4899" }}>
                                                        PV
                                                    </div>
                                                    Priya V.
                                                </div>
                                            </td>
                                            <td>
                                                <strong>$799</strong>
                                            </td>
                                            <td>May 27</td>
                                            <td>
                                                <span className="pill ok">
                                                    <span className="pill-dot" />
                                                    Paid
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-hdr">
                            <div className="card-hdr-txt">
                                <div className="card-title">Team Members</div>
                                <div className="card-sub">Performance overview this week</div>
                            </div>
                            <span className="card-tag">5 Active</span>
                        </div>
                        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
                            <div className="tbl-wrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Member</th>
                                            <th>Role</th>
                                            <th>Tasks</th>
                                            <th>Δ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt">JD</div>John Doe
                                                </div>
                                            </td>
                                            <td>Super Admin</td>
                                            <td>42</td>
                                            <td>
                                                <span className="tup">↑ 18%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#6366f1" }}>
                                                        EM
                                                    </div>
                                                    Eva Müller
                                                </div>
                                            </td>
                                            <td>Editor</td>
                                            <td>29</td>
                                            <td>
                                                <span className="tup">↑ 5%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#14b8a6" }}>
                                                        RN
                                                    </div>
                                                    Raj Nair
                                                </div>
                                            </td>
                                            <td>Developer</td>
                                            <td>61</td>
                                            <td>
                                                <span className="tdn">↓ 3%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#f59e0b" }}>
                                                        CL
                                                    </div>
                                                    Clara Lee
                                                </div>
                                            </td>
                                            <td>Designer</td>
                                            <td>18</td>
                                            <td>
                                                <span className="tup">↑ 22%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ucell">
                                                    <div className="uavt" style={{ background: "#ec4899" }}>
                                                        TP
                                                    </div>
                                                    Tom Park
                                                </div>
                                            </td>
                                            <td>Analyst</td>
                                            <td>35</td>
                                            <td>
                                                <span className="tdn">↓ 1%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-hdr">
                            <div className="card-hdr-txt">
                                <div className="card-title">UI Component Kit</div>
                                <div className="card-sub">
                                    Buttons · Badges · Avatars · Icons · Alerts · Progress · Toggles ·
                                    Tooltips · Dropdowns
                                </div>
                            </div>
                            <span className="card-tag">Toolkit</span>
                        </div>
                        <div className="card-body">
                            {/* Buttons: Variants */}
                            <div className="cs">
                                <div className="cs-lbl">Buttons — Variants</div>
                                <div className="cs-row">
                                    <button className="btn btn-primary">Primary</button>
                                    <button className="btn btn-secondary">Secondary</button>
                                    <button className="btn btn-outline">Outline</button>
                                    <button className="btn btn-ghost">Ghost</button>
                                    <button className="btn btn-danger">Danger</button>
                                    <button className="btn btn-success">Success</button>
                                    <button className="btn btn-warning">Warning</button>
                                </div>
                            </div>
                            {/* Buttons: Sizes + Icon + Loading */}
                            <div className="cs">
                                <div className="cs-lbl">Buttons — Sizes · Icon · Loading</div>
                                <div className="cs-row" style={{ alignItems: "center" }}>
                                    <button className="btn btn-primary btn-xs">XSmall</button>
                                    <button className="btn btn-primary btn-sm">Small</button>
                                    <button className="btn btn-primary">Default</button>
                                    <button className="btn btn-primary btn-lg">Large</button>
                                    <button className="btn btn-secondary btn-loading">Loading</button>
                                    <button className="btn btn-secondary btn-icon" title="Settings">
                                        <svg
                                            width={16}
                                            height={16}
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
                                    <button className="btn btn-outline btn-icon btn-lg" title="Add">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1={12} y1={5} x2={12} y2={19} />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Badges */}
                            <div className="cs">
                                <div className="cs-lbl">Badges</div>
                                <div className="cs-row">
                                    <span className="badge badge-primary">Primary</span>
                                    <span className="badge badge-success">
                                        <span className="badge-dot" />
                                        Active
                                    </span>
                                    <span className="badge badge-warning">
                                        <span className="badge-dot" />
                                        Pending
                                    </span>
                                    <span className="badge badge-danger">Error</span>
                                    <span className="badge badge-info">Info</span>
                                    <span className="badge badge-neutral">Neutral</span>
                                    <span className="badge badge-primary badge-sq">Square</span>
                                    <span
                                        className="badge badge-success"
                                        style={{ fontSize: ".75rem", padding: "4px 11px" }}
                                    >
                                        Large
                                    </span>
                                    <span
                                        className="badge badge-danger"
                                        style={{ fontSize: ".6rem", padding: "2px 6px" }}
                                    >
                                        XS
                                    </span>
                                </div>
                            </div>
                            {/* Avatars */}
                            <div className="cs">
                                <div className="cs-lbl">Avatars — Sizes · Square · Group</div>
                                <div
                                    className="cs-row"
                                    style={{ gap: 18, flexWrap: "wrap", alignItems: "center" }}
                                >
                                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                        <div className="av av-xs" style={{ background: "#eb5e28" }}>
                                            J
                                        </div>
                                        <div className="av av-sm" style={{ background: "#6366f1" }}>
                                            M
                                        </div>
                                        <div className="av av-md" style={{ background: "#14b8a6" }}>
                                            S
                                        </div>
                                        <div className="av av-lg" style={{ background: "#f59e0b" }}>
                                            D
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                        <div
                                            className="av av-sm av-sq"
                                            style={{ background: "#ec4899" }}
                                        >
                                            P
                                        </div>
                                        <div
                                            className="av av-md av-sq"
                                            style={{ background: "#8b5cf6" }}
                                        >
                                            R
                                        </div>
                                        <div
                                            className="av av-md av-sq"
                                            style={{ background: "#0ea5e9" }}
                                        >
                                            C
                                        </div>
                                    </div>
                                    <div className="av-group">
                                        <div className="av av-sm" style={{ background: "#eb5e28" }}>
                                            J
                                        </div>
                                        <div className="av av-sm" style={{ background: "#6366f1" }}>
                                            M
                                        </div>
                                        <div className="av av-sm" style={{ background: "#14b8a6" }}>
                                            S
                                        </div>
                                        <div className="av av-sm" style={{ background: "#f59e0b" }}>
                                            D
                                        </div>
                                        <div
                                            className="av av-sm"
                                            style={{
                                                background: "var(--surface)",
                                                color: "var(--text-lo)",
                                                fontSize: ".58rem",
                                                border: "2px solid var(--card-bg)"
                                            }}
                                        >
                                            +4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Icon Grid */}
                            <div className="cs">
                                <div className="cs-lbl">Icon Chips (hover to highlight)</div>
                                <div className="icon-grid">
                                    <div className="icon-chip" title="Home">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Users">
                                        <svg
                                            width={18}
                                            height={18}
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
                                    </div>
                                    <div className="icon-chip" title="Analytics">
                                        <svg
                                            width={18}
                                            height={18}
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
                                    </div>
                                    <div className="icon-chip" title="Bell">
                                        <svg
                                            width={18}
                                            height={18}
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
                                    </div>
                                    <div className="icon-chip" title="Settings">
                                        <svg
                                            width={18}
                                            height={18}
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
                                    </div>
                                    <div className="icon-chip" title="Lock">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Mail">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Search">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx={11} cy={11} r={8} />
                                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Add">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1={12} y1={5} x2={12} y2={19} />
                                            <line x1={5} y1={12} x2={19} y2={12} />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Delete">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6l-1 14H6L5 6" />
                                            <path d="M10 11v6" />
                                            <path d="M14 11v6" />
                                            <path d="M9 6V4h6v2" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Edit">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Download">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1={12} y1={15} x2={12} y2={3} />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Upload">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="17 8 12 3 7 8" />
                                            <line x1={12} y1={3} x2={12} y2={15} />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Share">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx={18} cy={5} r={3} />
                                            <circle cx={6} cy={12} r={3} />
                                            <circle cx={18} cy={19} r={3} />
                                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Star">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Heart">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Calendar">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                            <line x1={16} y1={2} x2={16} y2={6} />
                                            <line x1={8} y1={2} x2={8} y2={6} />
                                            <line x1={3} y1={10} x2={21} y2={10} />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Globe">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <line x1={2} y1={12} x2={22} y2={12} />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Filter">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                        </svg>
                                    </div>
                                    <div className="icon-chip" title="Copy">
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Alerts */}
                            <div className="cs">
                                <div className="cs-lbl">Alerts / Banners</div>
                                <div className="alert alert-ok">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <div className="alert-t">
                                        <strong>Success</strong>Your changes have been saved
                                        successfully.
                                    </div>
                                </div>
                                <div className="alert alert-warn">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                        <line x1={12} y1={9} x2={12} y2={13} />
                                        <line x1={12} y1={17} x2="12.01" y2={17} />
                                    </svg>
                                    <div className="alert-t">
                                        <strong>Warning</strong>Subscription renews in 3 days.
                                    </div>
                                </div>
                                <div className="alert alert-err">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={12} y1={8} x2={12} y2={12} />
                                        <line x1={12} y1={16} x2="12.01" y2={16} />
                                    </svg>
                                    <div className="alert-t">
                                        <strong>Error</strong>Failed to connect to the remote server.
                                    </div>
                                </div>
                                <div className="alert alert-inf">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={12} y1={16} x2={12} y2={12} />
                                        <line x1={12} y1={8} x2="12.01" y2={8} />
                                    </svg>
                                    <div className="alert-t">
                                        <strong>Info</strong>New feature rollout scheduled for next
                                        Tuesday.
                                    </div>
                                </div>
                            </div>
                            {/* Progress Bars */}
                            <div className="cs">
                                <div className="cs-lbl">Progress Bars</div>
                                <div className="pbar-wrap">
                                    <div className="pbar-meta">
                                        <span>Storage Used</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="pbar-track">
                                        <div className="pbar-fill" style={{ width: "78%" }} />
                                    </div>
                                </div>
                                <div className="pbar-wrap">
                                    <div className="pbar-meta">
                                        <span>Tasks Done</span>
                                        <span>55%</span>
                                    </div>
                                    <div className="pbar-track">
                                        <div className="pbar-fill ok" style={{ width: "55%" }} />
                                    </div>
                                </div>
                                <div className="pbar-wrap">
                                    <div className="pbar-meta">
                                        <span>Budget Spent</span>
                                        <span>91%</span>
                                    </div>
                                    <div className="pbar-track">
                                        <div className="pbar-fill warn" style={{ width: "91%" }} />
                                    </div>
                                </div>
                                <div className="pbar-wrap">
                                    <div className="pbar-meta">
                                        <span>Error Rate</span>
                                        <span>12%</span>
                                    </div>
                                    <div className="pbar-track">
                                        <div className="pbar-fill bad" style={{ width: "12%" }} />
                                    </div>
                                </div>
                            </div>
                            {/* Toggles */}
                            <div className="cs">
                                <div className="cs-lbl">Toggle Switches</div>
                                <div className="cs-row" style={{ gap: 22, flexWrap: "wrap" }}>
                                    <label className="tgl-wrap">
                                        <label className="tgl">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="tgl-slider" />
                                        </label>
                                        Notifications
                                    </label>
                                    <label className="tgl-wrap">
                                        <label className="tgl">
                                            <input type="checkbox" />
                                            <span className="tgl-slider" />
                                        </label>
                                        Dark Mode
                                    </label>
                                    <label className="tgl-wrap">
                                        <label className="tgl">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="tgl-slider" />
                                        </label>
                                        Auto-save
                                    </label>
                                    <label className="tgl-wrap">
                                        <label className="tgl">
                                            <input type="checkbox" />
                                            <span className="tgl-slider" />
                                        </label>
                                        Beta Features
                                    </label>
                                </div>
                            </div>
                            {/* Tooltips */}
                            <div className="cs">
                                <div className="cs-lbl">Tooltips (hover to reveal)</div>
                                <div className="cs-row">
                                    <button
                                        className="btn btn-secondary"
                                        data-tip="This is a tooltip!"
                                    >
                                        Hover me
                                    </button>
                                    <button className="btn btn-outline" data-tip="Save your progress">
                                        Save
                                    </button>
                                    <button className="btn btn-ghost" data-tip="Opens in new tab">
                                        External
                                    </button>
                                    <span
                                        className="badge badge-primary"
                                        data-tip="Version 2.4.1"
                                        style={{ cursor: "default" }}
                                    >
                                        v2.4
                                    </span>
                                </div>
                            </div>
                            {/* Dropdown Demo */}
                            <div className="cs">
                                <div className="cs-lbl">Dropdown Examples</div>
                                <div className="cs-row">
                                    <div className="c-dd">
                                        <button className="btn btn-primary" onClick={() => toggleCDD('cdd1')}>
                                            Actions
                                            <svg
                                                width={13}
                                                height={13}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                        <div className="c-dd-panel" id="cdd1">
                                            <div className="c-dd-item">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                                Edit
                                            </div>
                                            <div className="c-dd-item">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <rect x={9} y={9} width={13} height={13} rx={2} />
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                                </svg>
                                                Duplicate
                                            </div>
                                            <div className="c-dd-item">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1={12} y1={15} x2={12} y2={3} />
                                                </svg>
                                                Export
                                            </div>
                                            <div
                                                style={{
                                                    height: 1,
                                                    background: "var(--border)",
                                                    margin: "4px 0"
                                                }}
                                            />
                                            <div className="c-dd-item red">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6l-1 14H6L5 6" />
                                                </svg>
                                                Delete
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-dd">
                                        <button
                                            className="btn btn-secondary btn-icon"
                                            onClick={() => toggleCDD('cdd2')}
                                            title="More"
                                        >
                                            <svg
                                                width={17}
                                                height={17}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx={12} cy={5} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={12} cy={19} r={1} />
                                            </svg>
                                        </button>
                                        <div className="c-dd-panel" id="cdd2">
                                            <div className="c-dd-item">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <circle cx={18} cy={5} r={3} />
                                                    <circle cx={6} cy={12} r={3} />
                                                    <circle cx={18} cy={19} r={3} />
                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                </svg>
                                                Share
                                            </div>
                                            <div className="c-dd-item">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                Favourite
                                            </div>
                                            <div className="c-dd-item">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                                Send Email
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /card-body */}
                    </div>
                    {/* /card */}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-hdr">
                            <div className="card-hdr-txt">
                                <div className="card-title">Form Input Library</div>
                                <div className="card-sub">
                                    Searchable select · Text · Number · Textarea · Checkbox · Radio ·
                                    Dropzone file upload
                                </div>
                            </div>
                            <span className="card-tag">Inputs</span>
                        </div>
                        <div className="card-body">
                            <div className="row" style={{ marginTop: 0 }}>
                                {/* LEFT COLUMN */}
                                <div className="col-12 col-md-6" style={{ marginBottom: 0 }}>
                                    {/* Searchable Select */}
                                    <div className="fg">
                                        <div className="fl">
                                            Country <span className="req">*</span>
                                        </div>
                                        <div className="csel" id="csel">
                                            <button
                                                type="button"
                                                className="csel-trig"
                                                id="cselTrig"
                                                onClick={toggleCsel}
                                            >
                                                <span id="cselDisplay" className="ph">
                                                    Choose a country…
                                                </span>
                                            </button>
                                            <svg
                                                className="csel-arr"
                                                width={15}
                                                height={15}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                            <div className="csel-panel" id="cselPanel">
                                                <div className="csel-search">
                                                    <input
                                                        type="text"
                                                        id="cselQ"
                                                        placeholder="Search…"
                                                        onInput={filterCsel}
                                                    />
                                                </div>
                                                <div className="csel-opts" id="cselOpts">
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Indonesia')}
                                                    >
                                                        Indonesia
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'United States')}
                                                    >
                                                        United States
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Japan')}
                                                    >
                                                        Japan
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Germany')}
                                                    >
                                                        Germany
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Brazil')}
                                                    >
                                                        Brazil
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'United Kingdom')}
                                                    >
                                                        United Kingdom
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'France')}
                                                    >
                                                        France
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'India')}
                                                    >
                                                        India
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Canada')}
                                                    >
                                                        Canada
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Australia')}
                                                    >
                                                        Australia
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'South Korea')}
                                                    >
                                                        South Korea
                                                    </div>
                                                    <div
                                                        className="csel-opt"
                                                        onClick={(e) => pickCsel(e.currentTarget, 'Netherlands')}
                                                    >
                                                        Netherlands
                                                    </div>
                                                </div>
                                                <div
                                                    className="csel-empty"
                                                    id="cselEmpty"
                                                    style={{ display: "none" }}
                                                >
                                                    No results found
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fhint">Start typing to filter the list</div>
                                    </div>
                                    {/* Text input with icon */}
                                    <div className="fg">
                                        <div className="fl">
                                            Full Name <span className="req">*</span>
                                        </div>
                                        <div className="fi-wrap">
                                            <svg
                                                className="fi-ico"
                                                width={15}
                                                height={15}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                            <input type="text" className="fi" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    {/* Email with addon */}
                                    <div className="fg">
                                        <div className="fl">Email Address</div>
                                        <div className="fi-group">
                                            <span className="fi-addon">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                            </span>
                                            <input
                                                type="email"
                                                className="fi"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                    </div>
                                    {/* Number */}
                                    <div className="fg">
                                        <div className="fl">Age</div>
                                        <div className="fi-wrap">
                                            <svg
                                                className="fi-ico"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                            <input
                                                type="number"
                                                className="fi"
                                                placeholder="25"
                                                min={0}
                                                max={120}
                                            />
                                        </div>
                                        <div className="fhint">Value between 0 and 120</div>
                                    </div>
                                    {/* Textarea */}
                                    <div className="fg">
                                        <div className="fl">Bio / Description</div>
                                        <textarea
                                            className="fi fi-ta"
                                            placeholder="Write a short description about yourself…"
                                            defaultValue={""}
                                        />
                                        <div className="fhint">Max 500 characters</div>
                                    </div>
                                </div>
                                {/* /left col */}
                                {/* RIGHT COLUMN */}
                                <div className="col-12 col-md-6" style={{ marginBottom: 0 }}>
                                    {/* Checkboxes */}
                                    <div className="fg">
                                        <div className="fl">Preferences</div>
                                        <label className="chk-wrap">
                                            <input type="checkbox" className="chk-in" defaultChecked={true} />
                                            <span className="chk-box" />
                                            Receive email notifications
                                        </label>
                                        <label className="chk-wrap">
                                            <input type="checkbox" className="chk-in" />
                                            <span className="chk-box" />
                                            Subscribe to weekly digest
                                        </label>
                                        <label className="chk-wrap">
                                            <input type="checkbox" className="chk-in" defaultChecked={true} />
                                            <span className="chk-box" />
                                            Enable two-factor authentication
                                        </label>
                                        <label className="chk-wrap">
                                            <input type="checkbox" className="chk-in" />
                                            <span className="chk-box" />
                                            Share anonymous usage data
                                        </label>
                                    </div>
                                    {/* Radio buttons */}
                                    <div className="fg">
                                        <div className="fl">Account Plan</div>
                                        <label className="rdo-wrap">
                                            <input
                                                type="radio"
                                                name="plan"
                                                className="rdo-in"
                                                defaultChecked={true}
                                            />
                                            <span className="rdo-circ" />
                                            Free — Basic features only
                                        </label>
                                        <label className="rdo-wrap">
                                            <input type="radio" name="plan" className="rdo-in" />
                                            <span className="rdo-circ" />
                                            Pro — Unlimited access
                                        </label>
                                        <label className="rdo-wrap">
                                            <input type="radio" name="plan" className="rdo-in" />
                                            <span className="rdo-circ" />
                                            Enterprise — Custom pricing
                                        </label>
                                    </div>
                                    {/* Disabled input */}
                                    <div className="fg">
                                        <div className="fl">User ID (read-only)</div>
                                        <input
                                            type="text"
                                            className="fi"
                                            defaultValue="usr_20260614_jd"
                                            disabled={false}
                                        />
                                        <div className="fhint">Auto-generated — cannot be changed</div>
                                    </div>
                                    {/* File Dropzone */}
                                    <div className="fg">
                                        <div className="fl">Upload Files</div>
                                        <div
                                            className="dz"
                                            id="dz"
                                            onClick={() => document.getElementById('dzInput')?.click()}
                                            onDragOver={(event) => dzOver(event.nativeEvent)}
                                            onDragLeave={dzLeave}
                                            onDrop={(event) => dzDrop(event.nativeEvent)}
                                        >
                                            <div className="dz-ico">
                                                <svg
                                                    width={30}
                                                    height={30}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="17 8 12 3 7 8" />
                                                    <line x1={12} y1={3} x2={12} y2={15} />
                                                </svg>
                                            </div>
                                            <div className="dz-txt">
                                                <strong>Click to upload</strong> or drag &amp; drop
                                            </div>
                                            <div className="dz-hint">
                                                PNG · JPG · PDF · DOCX — up to 10 MB
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            id="dzInput"
                                            style={{ display: "none" }}
                                            onChange={(event) => dzSelect(event.nativeEvent)}
                                        />
                                        <div className="dz-files" id="dzFiles" />
                                        <div className="fhint">Multiple files supported</div>
                                    </div>
                                </div>
                                {/* /right col */}
                            </div>
                            {/* Submit row */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: 10,
                                    flexWrap: "wrap",
                                    marginTop: 10,
                                    paddingTop: 18,
                                    borderTop: "1px solid var(--border)"
                                }}
                            >
                                <button className="btn btn-primary">
                                    <svg
                                        width={14}
                                        height={14}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    Submit Form
                                </button>
                                <button className="btn btn-secondary">Save Draft</button>
                                <button className="btn btn-ghost" style={{ marginLeft: "auto" }}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}