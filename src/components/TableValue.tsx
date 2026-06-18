import type { ReactNode } from 'react';

interface TableValueProps {
    header: ReactNode,
    body: ReactNode,
}

export default function TableValue({ header, body }: TableValueProps) {
    return (
        <>
            <div className="tbl-wrap">
                <table>
                    <thead>
                        { header }
                    </thead>
                    <tbody>
                        { body }
                    </tbody>
                </table>
            </div>
        </>
    );
}