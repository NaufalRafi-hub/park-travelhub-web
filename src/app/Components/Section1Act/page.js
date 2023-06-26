import './styles.css'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
// import { useParams } from 'next/navigation';

export default function Section1Act(props) {
    const {data} = props 
//   const searchPar = useParams();
//   console.log({Marquee});
  return (
    <div className='w-full h-[500px] relative overflow-y-hidden'>
        <div className=" top-0 w-full bg-grayie flex p-5 h-[500px]">
                <div className='top-4 left-6 z-1 overflow-y-hidden'>
                    
                            
                </div>
                <div className='absolute w-full h-[500px] top-0'>
                    <h1 className='outline'>
                    <Marquee>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
                    <h1 className='outline'>
                    <Marquee direction='right'>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
                    <h1 className='outline'>
                    <Marquee>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
                    <h1 className='outline'>
                    <Marquee direction='right'>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
                    <h1 className='outline'>
                    <Marquee>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
                    <h1 className='outline'>
                    <Marquee direction='right'>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
                    <h1 className='outline'>
                    <Marquee>
                    {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} {data[0].bgText} 
                    </Marquee></h1>
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
                    <h1 className='w-full font-bold color-greenie text-xl'>{data[0].title}</h1>
                    
                    
                    
                {/* </motion.div> */}
                </div>
            </div>
        </div>
  )
}
