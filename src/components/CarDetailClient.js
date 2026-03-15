'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CarDetailClient({ car }) {
    const { descriptions } = car;
    const [selectedImage, setSelectedImage] = useState(Object.values(car.images)[0]);

    const tableDimentions = () => (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-primary pb-2 inline-block">Dimensi</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-primary text-primary-content">
                            <th className="w-1/2">Spesifikasi</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {descriptions.dimentions.length && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Overall Panjang / Length</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.length)}</td>
                            </tr>
                        )}
                        {descriptions.dimentions.width && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Overall Lebar / Width</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.width)}</td>
                            </tr>
                        )}
                        {descriptions.dimentions.height && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Overall Tinggi / Height</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.height)}</td>
                            </tr>
                        )}
                        {descriptions.dimentions.wheelbase && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Jarak Poros Roda / Wheelbase</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.wheelbase)}</td>
                            </tr>
                        )}
                        {descriptions.dimentions.tread_front && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Jarak Pijak / Tread (Depan/Front)</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.tread_front)}</td>
                            </tr>
                        )}
                        {descriptions.dimentions.tread_rear && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Jarak Pijak / Tread (Belakang / Rear)</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.tread_rear)}</td>
                            </tr>
                        )}
                        {descriptions.dimentions.ground_clearance && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Jarak Terendah / Ground Clearance</td>
                                <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.dimentions.ground_clearance)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const tableEngine = () => {
        if (!descriptions.engine) return null;
        return (
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-primary pb-2 inline-block">Mesin</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-primary text-primary-content">
                                <th className="w-1/2">Spesifikasi</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {descriptions.engine.type && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Tipe Mesin / Engine Type</td>
                                    <td className="opacity-80">{descriptions.engine.type}</td>
                                </tr>
                            )}
                            {descriptions.engine.displacement && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Isi Silinder / Displacement (Cc)</td>
                                    <td className="opacity-80">{Intl.NumberFormat('id-ID').format(descriptions.engine.displacement)}</td>
                                </tr>
                            )}
                            {descriptions.engine.max_output && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Daya Maksimum / Maximum Output (Ps/Rpm)</td>
                                    <td className="opacity-80">{descriptions.engine.max_output}</td>
                                </tr>
                            )}
                            {descriptions.engine.max_torque && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Torsi Maksimum / Maximum Torque (Kgm/Rpm)</td>
                                    <td className="opacity-80">{descriptions.engine.max_torque}</td>
                                </tr>
                            )}
                            {descriptions.engine.compression_rate && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Rasio Kompresi / Compression Ratio</td>
                                    <td className="opacity-80">{descriptions.engine.compression_rate}</td>
                                </tr>
                            )}
                            {descriptions.engine.fuel_system && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Sistem Pemasukan Bahan Bakar / Fuel System</td>
                                    <td className="opacity-80">{descriptions.engine.fuel_system}</td>
                                </tr>
                            )}
                            {descriptions.engine.tank_capacity && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Kapasitas Tangki / Fuel Capacity (Liter)</td>
                                    <td className="opacity-80">{descriptions.engine.tank_capacity}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const tableTransmission = () => (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-primary pb-2 inline-block">Transmisi</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-primary text-primary-content">
                            <th className="w-1/2">Spesifikasi</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {descriptions.transmission.speed && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Transmisi / Transmission Type</td>
                                <td className="opacity-80">{descriptions.transmission.speed}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_1 && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi / Gear Ratio 1st</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_1}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_2 && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi / Gear Ratio 2nd</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_2}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_3 && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi / Gear Ratio 3rd</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_3}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_4 && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi / Gear Ratio 4th</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_4}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_5 && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi / Gear Ratio 5th</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_5}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_6 && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi / Gear Ratio 6th</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_6}</td>
                            </tr>
                        )}
                        {descriptions.transmission.ratio_r && (
                            <tr className="hover">
                                <td className="font-semibold capitalize">Perbandingan Gigi Mundur / Gear Ratio Reverse</td>
                                <td className="opacity-80">{descriptions.transmission.ratio_r}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )

    const tableChassis = () => {
        if (!descriptions.chassis) return null;

        return (
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-primary pb-2 inline-block">Sasis</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-primary text-primary-content">
                                <th className="w-1/2">Spesifikasi</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {descriptions.chassis.suspension_front && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Suspensi Depan / Front Suspension</td>
                                    <td className="opacity-80">{descriptions.chassis.suspension_front}</td>
                                </tr>
                            )}
                            {descriptions.chassis.suspension_rear && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Suspensi Belakang / Rear Suspension</td>
                                    <td className="opacity-80">{descriptions.chassis.suspension_rear}</td>
                                </tr>
                            )}
                            {descriptions.chassis.brakes_front && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Rem Depan / Front Brakes</td>
                                    <td className="opacity-80">{descriptions.chassis.brakes_front}</td>
                                </tr>
                            )}
                            {descriptions.chassis.brakes_rear && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Rem Belakang / Rear Brakes</td>
                                    <td className="opacity-80">{descriptions.chassis.brakes_rear}</td>
                                </tr>
                            )}
                            {descriptions.chassis.additional_breake_system && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Sistem Rem Tambahan / Additional Brake System</td>
                                    <td className="opacity-80">{descriptions.chassis.additional_breake_system}</td>
                                </tr>
                            )}
                            {descriptions.chassis.steering && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Sistem Kemudi / Steering</td>
                                    <td className="opacity-80">{descriptions.chassis.steering}</td>
                                </tr>
                            )}
                            {descriptions.chassis.tire_size && (
                                <tr className="hover">
                                    <td className="font-semibold capitalize">Ukuran Ban / Tire Size</td>
                                    <td className="opacity-80">{descriptions.chassis.tire_size}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <Link href="/list-mobil" className="btn btn-ghost btn-sm mb-6 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali ke Daftar Mobil
            </Link>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <span className="badge badge-primary mb-2">{car.type}</span>
                    <h1 className="text-4xl font-black mb-4 uppercase">{car.name}</h1>
                    <p className="text-lg opacity-70 leading-relaxed mb-6">
                        Temukan performa terbaik dan kenyamanan maksimal dengan {car.name}.
                        Didesain untuk memenuhi kebutuhan mobilitas Anda dengan fitur-fitur modern dan efisiensi tinggi.
                    </p>
                    <Link href="/daftar-harga" className="btn btn-primary btn-lg">Lihat Harga OTR</Link>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-2xl blur-sm opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <figure className="relative bg-base-100 p-4 rounded-2xl shadow-2xl border border-base-300 min-h-75 flex items-center justify-center">
                        <Image
                            src={selectedImage}
                            alt={car.name}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain rounded-xl transition-all duration-500"
                            priority
                        />
                    </figure>
                </div>
            </div>

            <div className="mb-20">
                <div className="flex overflow-x-auto gap-4 p-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-200">
                    {Object.entries(car.images).map(([color, url], index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(url)}
                            className={`flex-none w-32 sm:w-40 card bg-base-100 shadow-md border-2 transition-all group cursor-pointer overflow-hidden ${selectedImage === url ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-base-200 hover:border-primary/50'}`}
                        >
                            <figure className="bg-base-200/50 p-2 h-24 sm:h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src={url}
                                    alt={`${car.name} ${color}`}
                                    width={150}
                                    height={150}
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-12">
                <h2 className="text-3xl font-black text-center mb-10">SPESIFIKASI TEKNIS</h2>

                {tableDimentions()}
                {tableEngine()}
                {tableTransmission()}
                {tableChassis()}
            </div>
        </div>
    );
}
