import Link from 'next/link';
import React from 'react';

export const Hero = () => {
    return (
        <div className="relative overflow-hidden h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="0216 (1)(1).mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
            <div className="relative grid min-h-screen place-content-center overflow-hidden  px-4 py-24 text-gray-200">
                <div className="relative z-10 flex flex-col items-center">
                  <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Beta Now Live!
                  </span>
                  <h1 className="max-w-2xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                    Quality Nails for Every Project
                  </h1>
                  <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                  Discover our wide range of high-quality nails designed to meet all your construction and DIY project needs
                  </p>
                  <Link
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                    href="/order"
                  >
                    Order Now

                  </Link>
                </div>
            </div>

        </div>
    );
};
