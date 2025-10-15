
'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export interface Image {
    link: string;
    width: string;
    height: string;
    title: string;
    description: string;
    material: string;
    size: string;
}

export default function Gallery({ img }: { img: Image[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const imagesPerSlide = 3;
    const totalSlides = Math.ceil(img.length / imagesPerSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const openModal = (image: Image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const getSlides = () => {
        const slides = [];
        for (let i = 0; i < totalSlides; i++) {
            const start = i * imagesPerSlide;
            const end = start + imagesPerSlide;
            slides.push(img.slice(start, end));
        }
        return slides;
    };

    const slides = getSlides();

    return (
        <div className="mt-20 backdrop-blur-sm bg-white/30 ">
            <div className="relative">
                <div className="z-1 relative text-[#518224]">
                    <div className="vogue uppercase text-center text-[44px] leading-[40px] py-4">
                        Ha Anh&apos;s Paintings
                    </div>
                    <div className="w-2/3 mx-auto text-center">
                        This is Ha Anh&apos;s collection of acrylic and watercolor paintings. Inspired by the beauty of nature, these works capture shifting skies, flowing landscapes, and the quiet presence of trees and water. Blending the vibrancy of acrylics with the softness of watercolor, the collection reflects the strength and delicacy of the natural world.
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="flex-shrink-0 w-full flex justify-center gap-6 p-6">
                            {slide.map((each, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg w-80 cursor-pointer" onClick={() => openModal(each)}>
                                    <Image
                                        src={each.link}
                                        alt={each.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-[#518224] mb-2">{each.title}</h3>
                                    <p className="text-sm text-gray-700 mb-2">{each.description}</p>
                                    <div className="text-xs text-gray-600">
                                        <p><strong>Material:</strong> {each.material}</p>
                                        <p><strong>Size:</strong> {each.size}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2 shadow-lg"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-white/70 rounded-full p-2 shadow-lg"
                >
                    ›
                </button>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="bg-white rounded-lg p-6 max-w-4xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                        <Image
                            src={selectedImage.link}
                            alt={selectedImage.title}
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-[#518224] mb-2">{selectedImage.title}</h3>
                        <p className="text-lg text-gray-700 mb-2">{selectedImage.description}</p>
                        <div className="text-sm text-gray-600">
                            <p><strong>Material:</strong> {selectedImage.material}</p>
                            <p><strong>Size:</strong> {selectedImage.size}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
