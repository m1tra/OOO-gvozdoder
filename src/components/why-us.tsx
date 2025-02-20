import React from 'react'

type Props = {}

export const WhyUs = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto '>
        <h1 className='text-neutral-300 font-bold text-5xl '>Why us</h1>
        <div className='relative  px-5'>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"/>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-transparent"/>

            <div className="relative overflow-hidden h-screen ">
                <video
                    className="absolute left-0 -translate-y-1/2 top-1/2 w-full  object-cover"
                    autoPlay
                    loop
                    muted
                    >
                    <source src="video/0216 (3).mp4" type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>


            </div> 
        </div>
    </div>
  )
}