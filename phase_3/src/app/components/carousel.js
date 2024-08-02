// components/Carousel.js
import { useState } from 'react';
import Image from 'next/image';

const images = [
    '/slider-1.jpg',
    '/slider-2.jpg',
    '/slider-3.jpg',
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative p-16 w-full h-96">
            <div className="relative w-full h-full overflow-hidden">
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={handlePrev}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={handleNext}
            >
                &gt;
            </button>
        </div>
    );
}
