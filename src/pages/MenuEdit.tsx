import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import Card from '../components/Card';
import Input from "../components/form/Input";


interface MenuStruct {
    id: string;
    name: string;
    path: string;
    status: number;
}

export default function MenuEdit() {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const [menu, setMenu] = useState<MenuStruct>();
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
        const { id } = useParams<{ id: string }>();
        
        useEffect(() => {
            // 2. Define an async function inside the useEffect
            const fetchMenu = async () => {
                try {
                    // 3. Make the request (Include JWT/Sanctum headers if needed)
                    const response = await fetch(`${baseUrl}/menu/${id}`, {
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
                    setError('Failed to fetch menu data.');
                } finally {
                    setIsLoading(false);
                }
            };
    
            // 4. Execute the function
            if (id) fetchMenu();
        }, [id]); // <-- The empty array means "Only run this once when the page loads"
    return (
        <>
            <div className="page-hdr">
                <div className="page-hdr-left">
                    <h1>Menu Edit</h1>
                    <p>Ubah data menu</p>
                    {/* <Select label='List Parent Menu' placeholder='<=== Pilih Menu ===>' optionList={menu} /> */}
                </div>
                <div className="page-hdr-right">
                    <Button link="/menu" type="warning" label="<== Kembali" size="sm"></Button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12">
                    <Card title='Menu List' subtitle='Data data menu sidebar' >
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Input typeInput="text" id="name" name="name" value={menu ? menu.name : ""} label="Nama Menu" placeholder="Masukkan nama menu" />
                            </div>
                            <div className="col-12 col-md-6">
                                <Input typeInput="text" id="path" name="path" value={menu ? menu.path : ""} label="Path Menu" placeholder="Masukkan path menu" />
                            </div>
                            <div className="col-12 col-md-12">
                                <Button link="/menu" type="success" label="+ Tambah Data" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}