import Image from "next/image";
import './Sec3.css'

export default function Section3home() {
  
    return (
        <div className="mt-300">
            <h1 className="italic font-bold w-12 mb-20">
                WHAT WE OFFER
            </h1>
            <div className="mt-180 flex flex-col justify-center text-center gap-10 md:flex-row">
                <div className="">
                    <h2 className="mb-10 italic font-bold">Experience</h2>
                    <Image src='/experience.png' className="ml-auto mr-auto" width={48} height={38}/>
                    <h3 className="mt-12 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros non</h3>
                </div>
                <div className="line"></div>
                <div>
                    <h2 className="mb-10 italic font-bold">Services</h2>
                    <Image src='/services.png' className="ml-auto mr-auto" width={48} height={38}/>
                    <h3 className="mt-10 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros non</h3>
                </div>
                <div className="line"></div>
                <div>
                    <h2 className="mb-10 italic font-bold">Customizable</h2>
                    <Image src='/customizable.png' className="ml-auto mr-auto" width={48} height={38}/>
                    <h3 className="mt-10 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros non</h3>
                </div>
                <div className="line"></div>
                <div>
                    <h2 className="mb-10 italic font-bold" >Accomodation</h2>
                    <Image src='/accomodation.png' className="ml-auto mr-auto" width={48} height={38}/>
                    <h3 className="mt-10 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros non</h3>
                </div>
            </div>
        </div>
    )
}