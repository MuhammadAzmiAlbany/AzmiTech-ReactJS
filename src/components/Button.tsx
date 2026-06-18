import { NavLink } from 'react-router-dom';

interface ButtonProps {
    type: string,
    link: string,
    label?: string,
    size?: string
}

export default function Button({ type, link, label = 'Default', size = '' }: ButtonProps) {
    return (
        <>
            <NavLink to={link} className={"btn btn-" + type + ' ' + size}>{label}</NavLink>
            {/* <NavLink to={link} className="btn btn-secondary">{label}</NavLink>
            <NavLink to={link} className="btn btn-outline">{label}</NavLink>
            <NavLink to={link} className="btn btn-ghost">{label}</NavLink>
            <NavLink to={link} className="btn btn-danger">{label}</NavLink>
            <NavLink to={link} className="btn btn-success">{label}</NavLink>
            <NavLink to={link} className="btn btn-warning">{label}</NavLink> */}
        </>
    );
}