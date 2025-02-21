'use client'
import React, { useState } from 'react';
import { Wrap } from './ui/wrapper';
import { Play } from 'lucide-react';

type Props = {};

export const Marketing = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Wrap>
        <h1 className='text-neutral-300 font-bold text-4xl lg:text-5xl pl-2 text-center'>Why us</h1>
      </Wrap>
      <div className='relative px-5'>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-transparent" />

        <div className="relative overflow-hidden h-screen">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer" 
              onClick={handleVideoClick}
            >
              <span className="text-white text-3xl"><Play /></span> {/* Play button */}
            </div>
          ) : (
            <video
              className="absolute left-0 -translate-y-1/2 top-1/2 w-full object-cover"
              autoPlay
              loop
              muted
              controls // Добавляем controls для плеера
            >
              <source src="123.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};
