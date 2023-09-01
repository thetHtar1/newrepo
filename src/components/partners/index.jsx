import Image from "next/image";
import { useState, useEffect } from "react";
import partnerBanner from '../../../public/images/partner1.jpg'
import { partnerLogos } from "./partner_logos";
import Link from "next/link";
import Modal from "../partnerApplicationForm";
export default function PartnersComponent (){
    const firstLine = partnerLogos.slice(0,4);
    const secLine = partnerLogos.slice(4,8);
    const thirdLine = partnerLogos.slice(8,10);
    const [showModal, setShowModal] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
      setShowBanner(true);
    }, []);

    return (
        <>
        <div className="px-4 ss:px-8 lg:px-16 inter mt-[60px] sm:mt-[100px]">
        <h1 className="rany text-[30px] font-medium ss:text-[50px] lg:text-7xl partners-title text-black">
           Our Trusted  Partners
            </h1>
            <div className="mt-[35px] partner-banner-container">
            <Image className={`w-full h-96 object-cover rounded partner-banner ${showBanner ? 'show' : ''}`} src={partnerBanner} alt="partner1"/>
            </div>
            <p className="mt-[26px] sm:mt-[37px] text-[12px] sm:text-[20px] partner-para text-black">
            At Smilax Global, we are proud to work alongside some of the best and most innovative companies in the industry.
             Our partners share our values and commitment to excellence, and together we strive to deliver the highest quality
              products and services to our customers. On this page, we would like to acknowledge and thank our valued partners
               for their ongoing support and collaboration. We believe that by working together, we can achieve great things
                and make a positive impact on the world.
             We invite you to learn more about our partners and the important work that we do together.
                
            </p>
            <div className="flex flex-col  mt-[47px] ss:px-[50px] xl:px-[0px] partner-logos">
                <div className="flex justify-center">
                {firstLine.map((i)=>(
                    <div>
                        <Image src={i.image}/>
                    </div>
                ))}
                </div>
                <div className="flex justify-center mt-[19px]">
                {secLine.map((i)=>(
                    <div>
                        <Image src={i.image}/>
                    </div>
                ))}
                </div>
                <div className="flex justify-center  mt-[19px]">
                {thirdLine.map((i)=>(
                    <div>
                        <Image src={i.image}/>
                    </div>
                ))}
                </div>
            </div>
            <div  className="flex justify-center mt-[50px] sm:mt-[58px]">
     <button  onClick={() => setShowModal(true)} className="flex justify-center mt-[50px] sm:mt-[58px] border-black border border-solid px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-[13px]  ">
     Be a partner with us
                     
                     </button> 
                     </div>
                     {showModal &&
            <Modal onClose={() => setShowModal(false)}>
                Partner <br/> Application
            </Modal>
        }
            </div>
        </>
    )
}