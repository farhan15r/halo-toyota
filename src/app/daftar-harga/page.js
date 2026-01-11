import daftarHargaA from "@/data/daftarHargaA.json";
import daftarHargaB from "@/data/daftarHargaB.json";

export const metadata = {
    title: "Daftar Harga",
    description: "Daftar Harga Mobil Toyota",
}

export default function DaftarHarga() {
    return (
        <div className="max-w-300 mx-auto mt-12">
            <h1 className="text-2xl font-bold text-center">HARGA KENDARAAN TOYOTA</h1>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift mb-12">

                <input type="radio" name="tab_harga" className="tab font-bold checked:bg-linear-to-b checked:from-base-300 checked:to-white px-6" aria-label="Daftar Harga Plat A" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <h2 className="text-lg font-bold">WILAYAH : SERANG & BALARAJA (PLAT NOMOR "A")</h2>
                    <span className="text-md font-bold">{new Date(daftarHargaA.laste_modified).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>

                    <div className="overflow-x-auto mt-6">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Tipe Mobil</th>
                                    <th>Harga OTR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {daftarHargaA.data.map((item, index) => (
                                    <tr key={index} className="hover:bg-base-200">
                                        <td>{item.type}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <input type="radio" name="tab_harga" className="tab font-bold checked:bg-linear-to-b checked:from-base-300 checked:to-white px-6" aria-label="Daftar Harga Plat B" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <h2 className="text-lg font-bold">WILAYAH : JAKARTA, BEKASI, BANTEN B (PLAT NOMOR "B")</h2>
                    <span className="text-md font-bold">{new Date(daftarHargaB.laste_modified).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>

                    <div className="overflow-x-auto mt-6">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Tipe Mobil</th>
                                    <th>Harga OTR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {daftarHargaB.data.map((item, index) => (
                                    <tr key={index} className="hover:bg-base-200">
                                        <td>{item.type}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}