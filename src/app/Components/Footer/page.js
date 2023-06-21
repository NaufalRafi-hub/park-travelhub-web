"use client"
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
// import "./styles.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
    const form = useRef();
    const notifie = () =>
    toast.success("Email sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_pe1r0dh",
          "template_bp2hr06",
          form.current,
          "TCKXkWKU8MXYGeYJU"
        )
        .then(
          (result) => {
            console.log(result.text);
            notifie
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    
    return (
        <>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <div className="flex flex-col md:grid md:grid-cols-3">
            <div className="col-span-2 bg-greenie p-12">
                <h1 className="italic font-bold w-120 mb-20 color-grayie ">
                    CONTACT US!
                </h1> 
                <form 
                ref={form}
                onSubmit={sendEmail}>
                <div className="flex gap-40">
                    <div>
                        <h1>Name</h1>
                        <Input type="Name" placeholder="Your name" name="user_name" className="mb-4"/>
                        <h1>Phone Number</h1>
                        <Input type="Phone Number" name="user_number" placeholder="Your Phone Number" 
                        className="mb-4"/>
                        <h1>Email</h1>
                        <Input type="Email" name="user_email" placeholder="Your Email" className="mb-4"/>
                    </div>
                    <div>
                        <h1>Message</h1>
                        <Textarea placeholder="Type your message here." name="user_msg" className="mb-4"/>
                        <div className="bg-grayie color-black text-white cursor-pointer p-2 text-center">
                            <button type="submit" value="Send" className="text-white text-center font-bold italic" onClick={notifie}>Submit</button>
                            {/* <input type="submit" value="Send" /> */}
                        </div>
                    </div>
                </div>
                </form>

            </div>
            <div className="flex flex-col align-center p-12 bg-grayie">
                <Image className="" src='/park-logo.png' alt='park-logo' width={100} height={100} />
                <div className="flex flex-col gap-5 mt-10">
                    <a className="text-white" href="">HOME</a>
                    <a className="text-white" href="">ABOUT US</a>
                    <a className="text-white" href="">TOUR & TRAVEL</a>
                    <a className="text-white" href="">SOCIALS</a>
                    <div className="flex gap-4">
                    <Image className="" src="/ig_icon.png" alt='socials icon' width={25} height={10}/>
                        <p className="text-white">@parktravelhub</p>
                    </div>
                    <div className="flex gap-4">
                    <Image className="" src="/tiktok_icon.png" alt='socials icon' width={25} height={10}/>
                        <p className="text-white">parktravelhub</p>
                    </div>
                    <div className="flex gap-4">
                    <Image className="" src="/wa_icon.png" alt='socials icon' width={25} height={10}/>
                        <p className="text-white">(+62) 8111990661</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
        
    )
}