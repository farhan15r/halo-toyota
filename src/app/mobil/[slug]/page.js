import { notFound } from 'next/navigation';
import listCarImages from '@/data/listCarImages.json';
import CarDetailClient from '@/components/CarDetailClient';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const car = listCarImages.find((c) => c.slug === slug);

    if (!car) {
        return {
            title: 'Car Not Found',
        };
    }

    return {
        title: `${car.name} - Toyota Official Cikupa`,
        description: `Informasi lengkap spesifikasi dan varian warna ${car.name}.`,
    };
}

export default async function CarDetail({ params }) {
    const { slug } = await params;
    const car = listCarImages.find((c) => c.slug === slug);

    if (!car) {
        notFound();
    }

    return <CarDetailClient car={car} />;
}

export async function generateStaticParams() {
    return listCarImages.map((car) => ({
        slug: car.slug,
    }));
}
