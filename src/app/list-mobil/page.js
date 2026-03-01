'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import listCarImages from '@/data/listCarImages.json';

function ListMobilContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const currentType = type ? type.toLowerCase() : 'all';

    const categories = [
        { name: 'All', value: 'all' },
        { name: 'MPV', value: 'mpv' },
        { name: 'SUV', value: 'suv' },
        { name: 'Commercial', value: 'commercial' },
        { name: 'Hatchback', value: 'hatchback' },
        { name: 'Electrified', value: 'electrified' }
    ];

    const filteredCars = currentType === 'all'
        ? listCarImages
        : listCarImages.filter(car => car.type.toLowerCase() === currentType);

    return (
        <div className="max-w-300 mx-auto mt-12 px-4">
            <h1 className="text-2xl font-bold text-center mb-8">LIST MOBIL TOYOTA</h1>

            <div className="tabs tabs-lift mb-12 flex justify-center sticky top-20 bg-base-100 z-40 py-2">
                {categories.map((cat) => (
                    <Link
                        key={cat.value}
                        href={`/list-mobil?type=${cat.value}`}
                        className={`tab font-bold px-6 ${currentType === cat.value ? 'tab-active bg-linear-to-b from-base-300 to-white' : ''}`}
                        role="tab"
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center pb-20">
                {filteredCars.length > 0 ? (
                    filteredCars.map((car, index) => {
                        const firstImageKey = Object.keys(car.images)[0];
                        const imageUrl = car.images[firstImageKey];

                        return (
                            <div key={index} className="relative">
                                <div className="badge badge-soft absolute top-10 left-4 z-10">{car.type}</div>
                                <div className="badge badge-primary absolute bottom-10 left-1/2 -translate-x-1/2 z-10 max-w-37.5 truncate block text-center" title={car.name}>
                                    {car.name}
                                </div>
                                <div className="hover-3d">
                                    <figure className="w-70 rounded-2xl">
                                        <Image src={imageUrl} alt={car.name} width={500} height={500} />
                                    </figure>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl opacity-50">No cars found for this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ListMobil() {
    return (
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
            <ListMobilContent />
        </Suspense>
    );
}
