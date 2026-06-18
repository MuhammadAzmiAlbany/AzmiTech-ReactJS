import type { ReactNode } from 'react';

interface TableValueProps {
    body: ReactNode,
}

export default function TableValue({ body }: TableValueProps) {
    return (
        <>
            <td>
                { body }
            </td>
        </>
    );
}