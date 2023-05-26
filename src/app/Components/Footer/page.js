import Image from "next/image";

export default function Footer() {
  
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-greenie">
                <h1 className="italic font-bold w-12 mb-20 color-greenie">
                    CONTACT US!
                </h1>
            </div>
            <div className="flex flex-col align-center p-12 bg-grayie">
                <Image className="ml-auto mr-auto" src='/park-logo.png' alt='park-logo' width={100} height={100} />
                <div>
                    <a className="text-white" href="">HOME</a>
                    <a className="text-white" href="">ABOUT US</a>
                    <a className="text-white" href="">TOUR & TRAVEL</a>
                    <a className="text-white" href="">SOCIALS</a>
                </div>
            </div>
            
        </div>
    )
}