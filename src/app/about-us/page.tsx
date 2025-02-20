
import HeroWithCanvasReveal from '@/components/hero_neo';
import { Marketing } from '@/components/marketing';
import { WhyUs } from '@/components/why-us';
import React from 'react';

const AboutUs = () => {
    return (
        <main className="  bg-neutral-950 text-white ">
            {/* <h1>Рекламное промо</h1>
            <div className="relative overflow-hidden h-screen">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="video/рекламный_ролик.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div> */}
            {/* 
                1 текст о нас
                2 почему мы
                3 рекламное промо
            */}
            <HeroWithCanvasReveal/>
            {/* <ShuffleHero/> */}
            <WhyUs/>
            <Marketing/>
        </main>
    );
};

export default AboutUs;
