interface InputProps {
    id: string,
    name: string,
    addClass?: string,
    typeInput: string,
    label: string,
    placeholder: string,
    value?: string
}

export default function Input({ typeInput, id, name, addClass, label, placeholder, value = "" }: InputProps) {
    return (
        <>
            <div className="fg">
                <div className="fl">{label}</div>
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
                        id={id}
                        name={name}
                        value={value}
                        type={typeInput}
                        className={"fi " + addClass}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </>
    );
}