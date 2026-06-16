import { sbActive } from '../ts/main'

interface SideButtonProps {
    classlist: string,
    label?: string
}

export default function SideButton({ classlist, label = 'Default' }: SideButtonProps) {
    return (
        <>
            <div className="sb-item active" onClick={(e) => sbActive(e.currentTarget)}>
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
                <span className="sb-label">{ label }</span>
            </div>
        </>
    );
}