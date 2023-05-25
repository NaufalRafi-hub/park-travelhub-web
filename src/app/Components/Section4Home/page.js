import Image from "next/image";

export default function Section4home() {
  
    return (
        <div className="mt-300 bg-grayie p-20 w-full">
            <h1 className="italic font-bold w-12 mb-20 color-greenie">
                OUR SELECTION OF SPORTS
            </h1>
            <div className="flex flex-col md:flex-row gap-5 mt-180">
                <div className="w-170 h-170">
                    <Image src='/golf.png' width={252} height={500}/>
                    <h3 className="text-white mt-4 text-left">GOLF</h3>
                </div>
                <div className=" w-170 h-170">
                    <Image src='/biking.png' width={252} height={500}/> 
                    <h3 className="text-white mt-4 text-left">CYCLING</h3>
                </div>
                <div className=" w-170 h-170">
                    <Image src='/yoga.png' width={252} height={500}/>
                    <h3 className="text-white mt-4 text-left">YOGA</h3>
                </div>
                <div className=" w-170 h-170">
                    <Image src='/tennis.png' width={252} height={500}/>
                    <h3 className="text-white mt-4 text-left">TENNIS</h3>
                </div>
                <div className="bg-greenie w-500 h-170">
                    {/* <Image src='/tennis.png' width={252} height={500}/> */}
                    {/* <h3 className="mt-4 text-left">TENNIS</h3> */}
                </div>
            </div>
        </div>
    )
}