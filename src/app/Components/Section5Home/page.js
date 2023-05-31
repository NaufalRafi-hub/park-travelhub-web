// import React from 'react'
"use client"
import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
import './Sec5.css'
import Image from 'next/image'

export default function Section5home() {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    useEffect(() => {    
        if (emblaApi) {      
            console.log(emblaApi.slideNodes()) // Access API    
        }  
    }, [emblaApi])
    return (
        <div className="mt-300">
            <h1 className="italic font-bold w-[117px] mb-20">
                OUR HIGHLIGHTED SPORT TOURISM
            </h1>
            
        <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide relative">
                <Image
                    src='/golf-w-1.png'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                        width: '1000px',
                        height: '500px'
                    }}
                />
                <div className='linear-sport w-full h-full absolute top-0 z-1'>

                </div>
                <div className='absolute right-0 top-0 p-3 bg-grayie'>
                    <h2 className='color-greenie font-bold'>LST</h2>
                </div>
                <div className='absolute left-10 bottom-10 z-9'>
                    <h2 className='text-white font-bold'>BALI 4 DAYS CYCLING TRIP</h2>
                </div>
                
            </div>
            <div className="embla__slide relative">
                <Image
                    src='/golf-w-1.png'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                        width: '1000px',
                        height: '500px'
                    }}
                />
                <div className='linear-sport w-full h-full absolute top-0 z-1'>

                </div>
                <div className='absolute right-0 top-0 p-3 bg-grayie'>
                    <h2 className='color-greenie font-bold'>LST</h2>
                </div>
                <div className='absolute left-10 bottom-10 z-9'>
                    <h2 className='text-white font-bold'>BALI 4 DAYS CYCLING TRIP</h2>
                </div>
            </div>
            <div className="embla__slide relative">
                <Image
                    src='/golf-w-1.png'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                        width: '1000px',
                        height: '500px'
                    }}
                />
                <div className='linear-sport w-full h-full absolute top-0 z-1'>

                </div>
                <div className='absolute right-0 top-0 p-3 bg-grayie'>
                    <h2 className='color-greenie font-bold'>LST</h2>
                </div>
                <div className='absolute left-10 bottom-10 z-9'>
                    <h2 className='text-white font-bold'>BALI 4 DAYS CYCLING TRIP</h2>
                </div>
            </div>
        </div>
        </div>

        </div>
    )
}