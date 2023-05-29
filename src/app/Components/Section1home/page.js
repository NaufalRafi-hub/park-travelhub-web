// "use client"
import Image from 'next/image'
import './Sec1.css'
import { motion } from "framer-motion"

export default function Section1home() {
  
    return (
        <div className="mt-[147px] w-full relative overflow-y-hidden">
            <div className='absolute top-4 left-6'>
                        <Image src='/park-s-header.png'
                        width={0}
                        height={0}
                        sizes='100vh'
                        style={{
                            width: '400px',
                            // height: '571px'
                        }}
                        />
                        
                    </div>
            <div className="bg-sec1 flex p-24">
                {/* <motion.div 
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}  */}
                <div
                className='wrap-1-sec1 flex flex-col gap-14 relative'>
                    <Image src='/park-s-logo.png'
                    width={0}
                    height={0}
                    sizes='100vh'
                    style={{width: '55px', height: '79px'}}
                    />
                    <h1 className='font-bold text-white'>HI SPORT ENTHUSIAST </h1>
                    <div className='bg-greenie p-4 font-bold text-center'>
                        <a>
                            TRAVEL WITH US
                        </a>
                    </div>
                    
                    
                {/* </motion.div> */}
                </div>
            </div>
        </div>
    )
}