import Image from 'next/image';
import listCarImages from '../data/listCarImages.json';

export default function CarGallery() {
    return (
        <section className="py-10 justify-center flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Mobil</h2>

            <div className="flex flex-wrap gap-6 max-w-300 justify-center">
                {listCarImages.map((car, index) => {
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
                })}
            </div>
        </section>
    )
}