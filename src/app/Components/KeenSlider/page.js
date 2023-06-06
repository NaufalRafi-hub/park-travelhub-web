import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./keenCSS.css"
import Image from "next/image";
import Link from 'next/link';

export default () => {
  const [sliderRef] = useKeenSlider({
    // loop: true,
    autoplay: true,
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 15,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider mt-180">
      <div className="keen-slider__slide number-slide1" style={{maxWidth: 250, minWidth: 250}}>
      <Link href="/golf">
            <div className="w-[302px] h-[500px] relative">
                <Image src='/golf.png' width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '302px', height: '470px', minWidth: '302px', minHeight: '470px' }} />
                <h3 className="font-bold absolute left-2 bottom-0 text-left w-[108px]">GOLF TRIP</h3>
            </div>
      </Link>
      </div>
      <div className="keen-slider__slide number-slide2" style={{maxWidth: 250, minWidth: 250}}>
        <Link href="/cycling">
            <div className="w-[302px] h-[500px] relative">
                <Image src='/biking.png' 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '302px', height: '470px' }} /> 
                <h3 className="font-bold absolute left-2 bottom-0 text-left w-[208px]">CYCLING TRIP</h3>
            </div>
          </Link>
      </div>
      <div className="keen-slider__slide number-slide3" style={{maxWidth: 250, minWidth: 250}}>
        <Link href="/yoga"> 
            <div className="w-[302px] h-[500px] relative">
                <Image src='/yoga.png' width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '302px', height: '470px' }} /> 
                <h3 className="font-bold absolute left-2 bottom-0 text-left w-[208px]">YOGA TRIP</h3>
            </div>
          </Link>
      </div>
      <div className="keen-slider__slide number-slide4" style={{maxWidth: 250, minWidth: 250}}>
        <Link href="/tennis">
            <div className="w-[302px] h-[500px] relative">
                <Image src='/tennis.png' 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '302px', height: '470px' }} /> 
                <h3 className="font-bold absolute left-2 bottom-0 text-left w-[208px]">TENNIS TRIP</h3>
            </div>
          </Link>
      </div>
      <div className="keen-slider__slide number-slide5" style={{maxWidth: 250, minWidth: 250}}>
        <Link href="/golf">
            <div className="bg-greenie w-[250px] h-[500px] flex flex-col justify-center items-center">
                <Image src='/add_icon.png' width={100} height={0}
                style={{ marginLeft:'auto', marginRight:'auto' }}
                />
                <h3 className="font-bold mt-4 text-center p-10">REQUEST CUSTOM TRIP</h3>
            </div>
          </Link>
      </div>
    </div>
  )
}
