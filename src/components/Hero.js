import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className="hero min-h-[70vh] bg-base-200 justify-center flex" aria-labelledby="hero-heading">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-300">
                <div className="w-full max-w-125 flex justify-end">
                    <Image
                        src="/adzan.png"
                        className="rounded-lg shadow-2xl max-w-350 object-cover"
                        alt="Adzan"
                        loading="eager"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="w-full mt-10 mb-10">
                    <h1 id="hero-heading" className="text-5xl font-extrabold leading-tight text-primary">
                        Dapatkan Promo Toyota Terbaik Hari Ini!
                    </h1>
                    <p className="py-6 text-lg text-base-content/70">
                        Halo Toyota! Temukan berbagai pilihan mobil Toyota impian Anda dengan penawaran spesial, cicilan ringan, dan proses cepat. Kami siap membantu Anda mendapatkan kendaraan berkualitas dengan harga terbaik.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn btn-primary btn-lg shadow-lg">
                            Lihat Promo
                        </button>
                        <button className="btn btn-outline btn-primary btn-lg">
                            Hubungi Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
