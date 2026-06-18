import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode,
    title: string,
    subtitle?: string,
    label?: string
}

export default function Card({ children, title, subtitle, label = 'Default' }: CardProps) {
    return (
        <>
            <div className="card">
                <div className="card-hdr">
                    <div className="card-hdr-txt">
                        <div className="card-title">
                            {title}
                        </div>
                        <div className="card-sub">
                            {subtitle}
                        </div>
                    </div>
                    <span className="card-tag">{label}</span>
                </div>
                <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
                    {children}
                </div>
            </div>
        </>
    );
}