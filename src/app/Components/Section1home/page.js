import Image from 'next/image'
import './Sec1.css'

export default function Section1home() {
  
    return (
        <div className="mt-[147px] w-full relative">
            <div className='absolute top-1 left-5'>
                        <Image src='/park-s-header.png'
                        width={0}
                        height={0}
                        sizes='100vh'
                        style={{
                            width: '400px',
                            height: '571px'
                        }}
                        />
                        
                    </div>
            <div className="bg-sec1 flex p-24">
                <div className='wrap-1-sec1 flex flex-col gap-14 relative'>
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
                    
                    
                </div>
            </div>
        </div>
    )
}