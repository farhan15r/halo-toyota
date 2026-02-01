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
                        <div key={index} className="hover-3d">
                            {/* content */}
                            <figure className="w-70 rounded-2xl">
                                <img src={imageUrl} alt={car.name} />
                            </figure>
                            {/* 8 empty divs needed for the 3D effect */}
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}