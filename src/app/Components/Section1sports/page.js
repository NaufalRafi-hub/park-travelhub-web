import './styles.css'
import Link from 'next/link';
export default function Section1sports() {
  
    return (
        <div>
            <div className='bg-grayie p-24'>
                <div className='mt-180'>
                    <h1 className="italic font-bold w-[140px] mb-20 color-greenie">
                        WHICH KIND OF GOLF ACTIVITY DO YOU WANT?
                    </h1>
                    <div className='flex flex-col gap-10 p-10 justify-center align-center'>
                        <Link href="/golf/doer">
                            <div className='doer w-full h-[400px] relative'> 
                                <div className='linear-sport w-full absolute h-[400px] top-0 -z-1 p-20'>
                                    <h1 className='color-greenie font-bold italic mt-20'>DOER</h1>
                                    <h3 className="mt-12 text-left text-white w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros non</h3>
                                </div>
                            </div>
                        </Link>
                        <div className='watcher w-full h-[400px] relative'>
                            <Link href="/golf/watcher">
                                <div className='linear-sport w-full absolute h-[400px] top-0 -z-1 p-20'>
                                        <h1 className='color-greenie font-bold italic mt-20'>WATCHER</h1>
                                        <h3 className="mt-12 text-left text-white w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros non</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}