"use client"
import Image from "next/image";
import './Sec4.css'
import { useEffect } from "react";

export default function Section4home() {
//   const sportImage = {
//     width: '40vmin',
//     height: '56vmin'
//   }
    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";  
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt === "0") return;
        
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2;
        
        const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        
        track.dataset.percentage = nextPercentage;
        
        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });
        
        for(const image of track.getElementsByClassName("image")) {
            image.animate({
            objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
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