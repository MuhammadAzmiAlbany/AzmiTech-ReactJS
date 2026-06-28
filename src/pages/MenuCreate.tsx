import Button from "../components/Button";
import Card from '../components/Card';
import Input from "../components/form/Input";

export default function MenuCreate() {
    return (
        <>
            <div className="page-hdr">
                <div className="page-hdr-left">
                    <h1>Menu Create</h1>
                    <p>Tambah data menu</p>
                    {/* <Select label='List Parent Menu' placeholder='<=== Pilih Menu ===>' optionList={menus} /> */}
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
                                <Input typeInput="text" id="name" name="name" label="Nama Menu" placeholder="Masukkan nama menu" />
                            </div>
                            <div className="col-12 col-md-6">
                                <Input typeInput="text" id="path" name="path" label="Path Menu" placeholder="Masukkan path menu" />
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