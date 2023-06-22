// "use client"
import Image from 'next/image'
import './Sec1.css'
import { motion } from "framer-motion"
import SliderSec1 from "./slider/index"

export default function Section1home(props) {
    const {data} = props;
    // console.log (data[0].imageData)
  
    return (
        <div className="mt-[87px] w-full h-[500px] relative overflow-y-hidden">
            <SliderSec1  data={data[0]?.imageData}/>
            
            <div className=" absolute top-0 w-full bg-sec1 flex p-5 h-[500px]">
                <div className='top-4 left-6 z-1 overflow-y-hidden'>
                    <Image src='/park-s-header.png'
                    width={0}
                    height={0}
                    sizes='1000vh'
                    style={{
                        width: '500px',
                        // height: '571px'
                    }}
                    />
                            
                </div>
                {/* <motion.div 
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}  */}
                <div
                className='absolute wrap-1-sec1 flex flex-col gap-10 left-[150px] top-[100px]'>
                    <Image src='/park-s-logo.png'
                    width={0}
                    height={0}
                    sizes='100vh'
                    style={{width: '55px', height: '79px'}}
                    />
                    <h1 className='w-[150px] font-bold text-white text-xl'>{data[0].title} </h1>
                    <div className='bg-greenie p-4  text-center'>
                        <a className='font-bold italic'>
                            TRAVEL WITH US
                        </a>
                    </div>
                    
                    
                {/* </motion.div> */}
                </div>
            </div>
        </div>
    )
}