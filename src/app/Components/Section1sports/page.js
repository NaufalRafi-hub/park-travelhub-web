"use client"
import './styles.css'
import Link from 'next/link';
import { useParams } from 'next/navigation';
export default function Section1sports(props) {
  const {data} = props
  const searchPar = useParams();
//   console.log(searchPar.option);
  const doerImg =  data[0].doer[0].img.src
//   console.log(data[0].watcher === true)
//   const watcherImg = data[0].watcher[0].img.src
    return (
        <div>
            <div className='bg-grayie p-24'>
                <div className='mt-180'>
                    <h1 className="italic font-bold w-[140px] mb-20 color-greenie">
                        WHICH KIND OF GOLF ACTIVITY DO YOU WANT?
                    </h1>
                    <div className='flex flex-col gap-10 p-10 justify-center align-center' >
                        <Link href={`sport/${encodeURIComponent(searchPar.option)}/doer/${encodeURIComponent(data[0].doer[0].title)}`}>
                            <div className='doer w-full h-[400px] relative' style={
                                {
                                display: 'block',
                                backgroundImage : `url(${doerImg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                                }
                            }> 
                                <div className='linear-sport w-full absolute h-[400px] top-0 -z-1 p-20'>
                                    <h1 className='color-greenie font-bold italic mt-20'>DOER</h1>
                                    <h3 className="mt-12 text-left text-white w-[400px]">{data[0].doer[0].sub}</h3>
                                </div>
                            </div>
                        </Link>
                        {data[0].watcher.length &&
                            <div className='watcher w-full h-[400px] relative' style={ 
                                {
                                    display: 'block',
                                    backgroundImage: `url(${data[0].watcher[0].img.src})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }
                                
                                }>
                                <Link href={`sport/${encodeURIComponent(searchPar.option)}/watcher/${encodeURIComponent(data[0].watcher[0].title)}`}>
                                    <div className='linear-sport w-full absolute h-[400px] top-0 -z-1 p-20'>
                                            <h1 className='color-greenie font-bold italic mt-20'>WATCHER</h1>
                                            <h3 className="mt-12 text-left text-white w-[400px]">{data[0].watcher[0].sub}</h3>
                                    </div>
                                </Link>
                            </div> 
                        }
                        
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}