// import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./syles.css"
import Image from 'next/image'

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 15,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider" >
      <div className="keen-slider__slide number-highlighed1" style={{maxWidth: 300, minWidth: 300}}>
            <Image
                src='/golf-w-1.png'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                    width: '1000px',
                    height: '500px',
                    objectFit : "cover"
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
      <div className="keen-slider__slide number-highlighed2" style={{maxWidth: 300, minWidth: 300}}>
            <Image
                src='/golf-w-1.png'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                    width: '1000px',
                    height: '500px',
                    objectFit : "cover"
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
      <div className="keen-slider__slide number-highlighed3" style={{maxWidth: 300, minWidth: 300}}>
            <Image
                src='/golf-w-1.png'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                    width: '1000px',
                    height: '500px',
                    objectFit : "cover"
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
      <div className="keen-slider__slide number-highlighed4" style={{maxWidth: 300, minWidth: 300}}>
            <Image
                src='/golf-w-1.png'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                    width: '1000px',
                    height: '500px',
                    objectFit : "cover"
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
      <div className="keen-slider__slide number-highlighed5" style={{maxWidth: 300, minWidth: 300}}>
            <Image
                src='/golf-w-1.png'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                    width: '1000px',
                    height: '500px',
                    objectFit : "cover"
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
      <div className="keen-slider__slide number-highlighed6" style={{maxWidth: 300, minWidth: 300}}>
            <Image
                src='/golf-w-1.png'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                    width: '1000px',
                    height: '500px',
                    objectFit : "cover"
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
  )
}
