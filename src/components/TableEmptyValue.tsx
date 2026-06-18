interface TableValueProps {
    cspan: number
}

export default function TableEmptyValue({ cspan }: TableValueProps) {
    return (
        <>
            <tr>
                <td colSpan={cspan} style={{ textAlign: "center" }}>
                    <strong>Data Kosong</strong>
                </td>
            </tr>
        </>
    );
}