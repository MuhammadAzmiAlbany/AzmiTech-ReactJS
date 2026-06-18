import type { ReactNode } from 'react';

interface TableProps {
    header: ReactNode,
    body: ReactNode,
}

export default function Table({ header, body }: TableProps) {
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