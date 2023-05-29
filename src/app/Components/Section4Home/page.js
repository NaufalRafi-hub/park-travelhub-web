import Image from "next/image";
import './Sec4.css'

export default function Section4home() {
//   const sportImage = {
//     width: '40vmin',
//     height: '56vmin'
//   }
    return (
        <div className="mt-300 bg-grayie w-full block h-[1000px] p-24 ">
            <h1 className="italic font-bold w-[97px] color-greenie">
                OUR SELECTION OF SPORTS
            </h1>
            <div className="mt-180 flex flex-col items-center lg:items-left">
                <div className="flex absolute gap-5 left-[30%] h-[650px]">
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/golf.png' width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '302px', height: '470px', minWidth: '302px', minHeight: '470px' }} />
                        <h3 className="font-bold absolute bottom-0 text-white text-left">GOLF</h3>
                    </div>
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/biking.png' 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '302px', height: '470px' }} /> 
                        <h3 className="font-bold absolute bottom-0 text-white mt-4 text-left">CYCLING</h3>
                    </div>
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/yoga.png' width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '302px', height: '470px' }} /> 
                        <h3 className="font-bold absolute bottom-0 text-white mt-4 text-left">YOGA</h3>
                    </div>
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/tennis.png' 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '302px', height: '470px' }} /> 
                        <h3 className="font-bold absolute bottom-0 text-white mt-4 text-left">TENNIS</h3>
                    </div>
                    <div className="bg-greenie w-[302px] h-[470px] flex flex-col justify-center align-center">

                        <Image src='/add_icon.png' width={100} height={0}
                        style={{ marginLeft:'auto', marginRight:'auto' }}
                        />
                        <h3 className="font-bold mt-4 text-center">REQUEST CUSTOM TRIP</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}