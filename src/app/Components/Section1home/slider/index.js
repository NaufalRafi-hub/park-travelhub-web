"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import Image from 'next/image'


export default function Slider (props) {
  const {data} = props;
  // console.log(data.imageData)
  console.log (data[0].file.src)
  

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image src={data[0].file.src}
                    fill
                    width={0}
                    height={0}
                    sizes='1000vh'
                    style={{
                        objectFit: "cover",
                    }}
                    />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={data[1].file.src}
                    fill
                    width={0}
                    height={0}
                    sizes='1000vh'
                    style={{
                      objectFit: "cover",
                    }}
                    />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={data[2].file.src}
                    fill
                    width={0}
                    height={0}
                    sizes='1000vh'
                    style={{
                      objectFit: "cover",
                    }}
                    />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src='/cycling-s1.jpg'
                    fill
                    width={0}
                    height={0}
                    sizes='1000vh'
                    style={{
                      objectFit: "cover",
                    }}
                    />
        </div>
      </div>
    </>
  )
}
