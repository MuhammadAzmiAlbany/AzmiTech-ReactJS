interface ButtonProps {
    onConfirmDelete: (id: string) => void;
    id: string,
    size?: string,
}

export default function ButtonDelete({ onConfirmDelete, id, size = '' }: ButtonProps) {
    return (
        <>
            <button
                onClick={() => onConfirmDelete(id)}
                className={'btn btn-danger btn-' + size}>Delete
            </button>
            {/* <NavLink to={link} className="btn btn-secondary">{label}</NavLink>
            <NavLink to={link} className="btn btn-outline">{label}</NavLink>
            <NavLink to={link} className="btn btn-ghost">{label}</NavLink>
            <NavLink to={link} className="btn btn-danger">{label}</NavLink>
            <NavLink to={link} className="btn btn-success">{label}</NavLink>
            <NavLink to={link} className="btn btn-warning">{label}</NavLink> */}
        </>
    );
}