"use client"

import { useState, useEffect, useRef } from "react";
import carouselData from "../data/carousel.json";

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % carouselData.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // Scroll effect
    useEffect(() => {
        if (carouselRef.current) {
            // Calculate the scroll position based on the width of the first child (assuming all are same width)
            const scrollAmount = carouselRef.current.clientWidth * activeIndex;
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + carouselData.length) % carouselData.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % carouselData.length);
    };

    return (
        <div className="max-w-300 mx-auto">
            <div className="carousel overflow-x-hidden w-full" ref={carouselRef}>
                {carouselData.map((slide, index) => (
                    <div key={index} className="carousel-item relative w-full h-48 md:h-96 ">
                        <img
                            src={slide.src}
                            className="w-full object-cover"
                            alt={slide.alt}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <button onClick={handlePrev} className="btn btn-circle">
                                ❮
                            </button>
                            <button onClick={handleNext} className="btn btn-circle">
                                ❯
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}