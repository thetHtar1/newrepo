import Image from 'next/image'
import semicol from '../../../psemicol.png'
import aboutus2 from '@/pages/assets/images/aboutus2.png'
import BrandValue from '@/pages/assets/animations/BrandValueAnimation'
import Lottie from "lottie-react" 
import MDimg from '@/pages/assets/images/MDimg.png'
import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";



export default function AboutUsComponent() {

// const MDdata =[
//   {image: MDimg,
//    name: "ZARCHI KHIN KYAW",
//    position: "Managing Director",
//    desc:"developing the company. I always welcome to give advice in all solutions in cost effective ways.”"
// },
// {image: MDimg,
// name: "Aung Tun",
// position: "Managing Director",
// desc:"developing the company.I always welcome to give advice in all solutions in cost effective ways.”"
// }
// ]

  
const [showAni, setShowAni] = useState(false);
const [isVisible, setIsVisible] = useState(false);
const textContainerRef = useRef(null);
useEffect(() => {
  const handleScroll = () => {
    const textContainer = textContainerRef.current;
    if (textContainer) { // Check if the ref has a value
        const textContainerTop = textContainer.offsetTop;
        const textContainerHeight = textContainer.offsetHeight;
        const windowScrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const windowHeight = window.innerHeight;
  
        if (
          windowScrollTop + windowHeight >= textContainerTop &&
          windowScrollTop <= textContainerTop + textContainerHeight &&
          !isVisible
        ) {
          setIsVisible(true);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

useEffect(() =>{
  const delay =2400;
  const timeoutAni =setTimeout(()=> {
    setShowAni(true);
  }, delay);

  return ( ) =>{
    clearTimeout(timeoutAni);
  }
}, [])



  return (
  
   <main className=" px-4 ss:px-8 lg:px-16 inter mt-[60px] sm:mt-[100px] ">
       <div className="">
            <h1 className="rany text-[30px] font-medium ss:text-[50px] lg:text-7xl aboutus-title">
           About us
            </h1>
            <p className="font-normal text-[12px] ss:text-[14px] lg:text-lg  aboutus-para text-justify">
            Smilax Global Co., Ltd is an innovative and creative company, providing High Level Security Solutions and developing in-house solutions for major corporations, medium and small businesses. Our mission is to produce creative, effective and cost effective quality solutions 
for our customers and clients in powerful, clear, memorable manner. Our wide scope of technical knowledge encompasses innovative technical solutions and creative business solutions.
</p>
<p className="font-normal text-[12px] ss:text-[14px] inter lg:text-lg mt-[8px] sm:mt-[20px] aboutus-para text-justify">
The goal on Information Technology and Services of Smilax Global is to deliver the best in IT service managementto ensure that our customers and, ultimately, the citizens of Myanmar realise the most from their IT and Security investments. So, we study business requirements of the customers and provides from the design stage to support and management of a completed solutions.
            </p>
            <h1 className='text-[20px] ss:text-[30px] lg:text-4xl xl:text-5xl font-medium rany aboutus-set-title mt-[23px]' >
            Specialising in <br/> your digital solutions
            </h1>
            <p className='text-justify text-[12px] ss:text-[14px] lg:text-lg font-normal aboutus-set-para	mt-[10px]'>
            We believe that every business deserves a digital solution that accurately reflects their brand and meets their Specialise needs. That's why we specialize in creating custom software and website, bringing your vision to life and ensuring your digital presence is as unique and impactful as your business itself.

            </p>
           
            <div  className='mt-[29px]'>
          {showAni && ( <Lottie className='brand-value-animation' animationData={BrandValue} loop={false} />)}
         
        </div>
       
        </div>
        <div>
        <div className='flex flex-cols-3 mt-[36px] gap-2 '>
        <span className='w-[100%] h-0.5 bg-black block'>
      </span>
      <div className='w-[45px] ss:w-[60px] -mt-1 ss:-mt-2'>
        <Image src={semicol} alt='semicol'/>
      </div>
      <span className='w-[100%] h-0.5 bg-black block'>
      </span>
        </div>



<div  className="border-b-2 border-black pb-[30px] sm:pb-[88px] ">


<Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 8000,
    disableOnInteraction: false,
  }}

 
  modules={[Autoplay]}
  className="mySwiper"
>
  <SwiperSlide>
        <div  className='mt-[38px] flex flex-col items-center'>
          <div>
     <Image className=" items-center rounded-full h-40 w-40 lg:h-[160px] lg:w-[160px] xl:h-[220px] xl:w-[220px] object-cover	"  src={MDimg} alt='mdimg'
     />
     </div>
     <h1 className='text-center text-[16px] sm:text-[20px]  font-semibold	mt-[11px] sm:mt-[30px]'>
     ZARCHI KHIN KYAW
     </h1>
     <p className='text-[12px] sm:text-[20px] italic font-light text-center	'>Managing Director</p>
     <p className='text-[12px] ss:text-[14px] sm:text-[20px] lg:text-[30px] font-normal text-center w-[258px] ss:w-[528px] sm:w-[904px]	mt-[13px]'>developing the company.I always welcome to give advice in all solutions in cost effective ways.</p>
 </div> 
  </SwiperSlide>
  <SwiperSlide>
        <div  className='mt-[38px] flex flex-col items-center'>
          <div>
     <Image className="rounded-full h-40 w-40 lg:h-[160px] lg:w-[160px] xl:h-[220px] xl:w-[220px] object-cover	"  src={MDimg} alt='mdimg'
     />
     </div>
     <h1 className='text-[16px] sm:text-[20px]  font-semibold	mt-[11px] sm:mt-[30px]'>
    Aung Tun
     </h1>
     <p className='text-[12px] sm:text-[20px] italic font-light	'>Managing Director</p>
     <p className='text-[12px] ss:text-[14px] sm:text-[20px] lg:text-[30px] font-normal text-center w-[258px] ss:w-[528px] sm:w-[904px]	mt-[13px]'>developing the company.I always welcome to give advice in all solutions in cost effective ways.</p>
 </div> 
  </SwiperSlide>
</Swiper>
      

        </div>
        <div className=' sm:mt-[57px] mt-[30px] '> 
    <h1 className={`item rany text-[20px] ss:text-[30px] lg:text-4xl xl:text-5xl font-medium	${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}  ref={textContainerRef}>
    Leading with Purpose: <br/>
Our Vision & Mission
    </h1>
    <div className={` item-delay1 text-[12px] ss:text-[15px] lg:text-lg font-normal mt-[13px] sm:mt-[30px] lg:mt-[57px]  pb-[30px] sm:pb-[88px] ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}  ref={textContainerRef}>
    <div className='sm:flex sm:gap-6'>
    <p> Vision: </p>
    <p className='mt-1 sm:mt-0'>To be the leading provider of innovative and high-quality security and technology solutions in Myanmar,
       empowering businesses to achieve their full potential
    </p>
    </div>
    <div className='mt-2 sm:mt-[20px] lg:mt-[41] sm:flex sm:gap-4'>
    <p> Mission: </p>
    <p className='mt-1 sm:mt-0'>At Smilax Global Co., Ltd, we are committed to providing our customers with cost-effective, customised,
       and reliable solutions that cater to their unique business requirements. We strive to maintain the highest levels
        of innovation, customer focus, quality, and integrity in everything we do. Our goal is to help our clients maximise 
      the returns on their IT and security investments, and to create a better, safer digital world for all.
    </p>
    </div>
    </div>
    <span className='w-full h-[2px] bg-black block'></span>
    <div className='sm:mt-[57px] mt-[30px] mb-[30px] '>
     <h1 className={`item-delay2 rany text-[20px] ss:text-[30px] lg:text-4xl xl:text-5xl font-medium sm:italic ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}  ref={textContainerRef}>
     The people who <br/>
make the magic happen.
     </h1>
     <p className={`item-delay3 mt-[13px] text-[12px] ss:text-[15px] lg:text-lg font-normal ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}  ref={textContainerRef}>
     At Smilax Global, we are proud to have a talented and dedicated team that brings a wealth of experience and expertise to everything we do.
      We understand that our success is built on the hard work and commitment of each member of our team.
     </p>
    
    </div>
        </div>
        <div className='mt-[13px] '>
      <Image className='w-screen h-[160px] ss:h-[220px] sm:h-[320px] lg:h-[428px]' src={aboutus2} alt='aboutus2'/>
     </div>
     <div className='flex justify-center'>
      <Link href="/meet-the-team">
     <button className="  border-black border-2 px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white mt-[13px]  ">
      Meet Our Team
                     
                     </button> 
                     </Link>
                     </div>
        </div>
       
   </main>
  )
}
