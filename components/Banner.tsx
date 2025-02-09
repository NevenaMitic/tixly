"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const images = ["/image1.jpg", "/image5.jpg", "/image2.jpg", "/image4.jpg", "/image3.jpg", "/image6.jpg"];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">

            <div className="absolute inset-0 flex w-full h-full transition-transform duration-1000"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${src})` }} />
                ))}
            </div>

            <div className="absolute inset-0 bg-black opacity-75" />

            <div className="relative z-10 text-white text-center px-4">
                <p className="text-3xl font-extralight uppercase mb-4">
                    Welcome To
                </p>
                <p className="text-5xl font-bold uppercase mb-6 bg-gradient-to-r from-red-500 to-pink-600 text-transparent bg-clip-text">
                    TIXLY Ticketing Platform
                </p>
                <p className="text-xl font-light mb-6">
                    Your gateway to the best events, concerts, sports experiences, and much more.
                </p>
            </div>

            <div className="relative z-10 w-full lg:max-w-2xl mt-2 px-2">
                <SearchBar />
            </div>
        </div>
    );
};

export default Banner;
