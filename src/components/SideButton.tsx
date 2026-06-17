import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface SideButtonProps {
    logo: ReactNode;
    link: string,
    label?: string
}

export default function SideButton({ logo, link, label = 'Default' }: SideButtonProps) {
    return (
        <>
            <NavLink to={link} className="sb-item">
                { logo }
                <span className="sb-label">{ label }</span>
            </NavLink>
        </>
    );
}