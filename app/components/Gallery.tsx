
'use client'

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

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
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openModal = (image: Image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="backdrop-blur-sm bg-white/30 rounded-lg">
            <div className="">
                <div className="z-1  text-[#518224]">
                    <div className="vogue uppercase text-center text-2xl sm:text-[44px] leading-[40px] py-4 px-4">
                        Ha Anh’s Acrylic Paintings
                    </div>
                    <div className="w-full sm:w-2/3 mx-auto text-center px-4">
                        This is Ha Anh&apos;s collection of acrylic and watercolor paintings. Inspired by the beauty of nature, these works capture shifting skies, flowing landscapes, and the quiet presence of trees and water. Blending the vibrancy of acrylics with the softness of watercolor, the collection reflects the strength and delicacy of the natural world.
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:p-6">
                {img.map((each, i) => (
                    <div key={i} className="relative bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg cursor-pointer" onClick={() => openModal(each)}>
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
                        <button
                            onClick={() => openModal(each)}
                            className="absolute bottom-4 right-4 cursor-pointer shadow-sm/20 bg-white/20 text-gray-600 p-2 rounded-lg"
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>

            {selectedImage && createPortal((
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 rounded-lg" onClick={closeModal}>
                    <div className="bg-white rounded-lg p-6 max-w-4xl max-h-full my-40 overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                        >
                            <Image src={'/close.svg'} width={24} height={24} alt=""></Image>
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
            ), document.body)}
        </div>
    );
}
