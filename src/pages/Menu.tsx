import { useState, useEffect } from 'react';
import Button from "../components/Button";
import Card from '../components/Card';
import Table from '../components/Table';
import TableEmptyValue from '../components/TableEmptyValue';

interface MenuStruct {
    id: string;
    name: string;
    path: string;
    status: number;
}

export default function Menu() {
    const [menus, setMenu] = useState<MenuStruct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // 2. Define an async function inside the useEffect
        const fetchMenu = async () => {
            try {
                // 3. Make the request (Include JWT/Sanctum headers if needed)
                const response = await fetch('http://127.0.0.1:9900/menu', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        // 'Authorization': `Bearer ${your_jwt_token}` 
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setMenu(data);
            } catch (err) {
                setError('Failed to fetch menus data.');
            } finally {
                setIsLoading(false);
            }
        };

        // 4. Execute the function
        fetchMenu();
    }, []); // <-- The empty array means "Only run this once when the page loads"

    // 5. Handle the UI states
    // if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <>
            <div className="page-hdr">
                <div className="page-hdr-left">
                    <h1>Menu Page</h1>
                    <p>Data data menu sidebar</p>
                </div>
                <div className="page-hdr-right">
                    <Button link="/menu" type="success" label="+ Tambah Data"></Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12">
                    <Card title='Menu List' subtitle='Data data menu sidebar' >
                        <Table
                            header={
                                <tr>
                                    <th>Id Menu</th>
                                    <th>Name</th>
                                    <th>Path</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            }
                            body={
                                <>
                                    {isLoading ? (
                                        <TableEmptyValue cspan={5} />
                                    )
                                        :
                                        (menus.length === 0 || error) ? (
                                            <TableEmptyValue cspan={5} />
                                        )
                                            : (
                                                menus.map((menu) => (
                                                    <tr key={menu.id}>
                                                        <td>
                                                            <strong>{menu.id}</strong>
                                                        </td>
                                                        <td>
                                                            <strong>{menu.name}</strong>
                                                        </td>
                                                        <td>{menu.path}</td>
                                                        <td>
                                                            <span className={"pill " + (menu.status == 1 ? 'ok' : 'bad')}>
                                                                <span className="pill-dot" />
                                                                {(menu.status == 1 ? 'Actived' : 'Deactived')}
                                                            </span>
                                                        </td>
                                                        <td className='cs-row'>
                                                            <Button link={"/menu/" + menu.id + "/edit"} type="warning" label="Edit"></Button>
                                                            <Button link={"/menu/"} type="danger" label="Delete"></Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                </>
                            }
                        />
                    </Card>
                </div>
            </div>
        </>
    );
}