import Image from "next/image";
import './Sec4.css'

export default function Section4home() {
  
    return (
        <div className="mt-300 bg-grayie w-full block h-[1000px] p-24">
            <h1 className="italic font-bold w-12 color-greenie">
                OUR SELECTION OF SPORTS
            </h1>
            <div className="mt-180 relative flex flex-col items-center  lg:items-left">
                <div className="flex absolute gap-5  overflow-auto h-[600px] ">
                    <div className="w-[302px] h-[500px]">
                        <Image src='/golf.png' fill sizes="40vmin 56vmin"/>
                        <h3 className="absolute -bottom-8 text-white mt-4 text-left">GOLF</h3>
                    </div>
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/biking.png' fill/> 
                        <h3 className="absolute -bottom-8 text-white mt-4 text-left">CYCLING</h3>
                    </div>
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/yoga.png' fill/>
                        <h3 className="absolute -bottom-8 text-white mt-4 text-left">YOGA</h3>
                    </div>
                    <div className="w-[302px] h-[500px] relative">
                        <Image src='/tennis.png' fill/>
                        <h3 className="absolute -bottom-8 text-white mt-4 text-left">TENNIS</h3>
                    </div>
                    <div className="bg-greenie w-[302px] h-[500px]">

                        {/* <Image src='/tennis.png' width={252} height={500}/> */}
                        <h3 className="mt-4 text-left">TENNIS tennis tennis tennis </h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}