import Image from "next/image"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import BannerImage from "@/pages/assets/images/Banner.png"
import HomeAni from "./HomeAni"
import 'animate.css'
import ImgSlider from "./ImgSlider"

export default function HomeBodyComponent() {
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

    // for 3 div
    const divRefs = useRef([]); // Ref to store references of each div
    useEffect(() => {
        const options = {
          threshold: 0.5, // Adjust the threshold value as needed
        };
      
        const handleIntersection = (entries, observer) => {
          let delay = 0;
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('fade-in')) {
              setTimeout(() => {
                entry.target.classList.add('fade-in');
              }, delay);
              delay += 500; // Adjust the delay between each div
            }
          });
        };
      
        const observer = new IntersectionObserver(handleIntersection, options);
      
        divRefs.current.forEach((divRef) => {
          observer.observe(divRef);
        });
      
        return () => {
          observer.disconnect();
        };
      }, []);
    
    return(
        
        <div className="px-4 ss:px-8 lg:px-14 rany mt-[86px] sm:mt-[118px]">
        <div>

            <div className="pt-4 lg:pt-0">
                <h1 className="text-4xl ss:text-6xl lg:text-[120px] font-normal  	">
                Transform your<br></br>
                visions into Reality 
                </h1>
            </div>

            <div className="pt-4 sm:pt-24">
                <Image className="object-cover w-full h-full" src={BannerImage} alt="bannerImage"></Image>
            </div>


 {/* <div className="flex flex-col sm:flex sm:flex-row gap-4 sm:gap-12 mt-6 sm:mt-20 div-container">
               <div className=" div-items" ref={(ref) => (divRefs.current[0] = ref)}>
                <h1 className="text-xl italic md:text-3xl  font-medium div-fade-left	">Specialisational</h1>
                <p className="text-xs sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">Our team has extensive knowledge and expertise in delivering high-quality, innovative solutions to help clients achieve their goals.</p>
                </div> 
                <span className="sm:block  bg-[#000000BF] w-1 h-80%"></span>
                <div className=" div-items" ref={(ref) => (divRefs.current[1] = ref)}>
                <h1 className="text-xl italic md:text-3xl  font-medium	div-fade-left">Transparency</h1>
                <p className="text-xs sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">We value open communication and aim to build a trusting and transparent partnership with our clients.</p>
                </div> 
                <span className="sm:block bg-[#000000BF] w-1 h-80%"></span>
                <div className=" div-items" ref={(ref) => (divRefs.current[2] = ref)}>
                <h1 className="text-xl italic md:text-3xl font-medium	div-fade-left">Enterpreneurship</h1>
                <p className="text-xs sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">We are an enterprising team that is dedicated to finding creative solutions to challenges and exploring new technologies to provide the best possible solutions for our clients.</p>
                </div> 
            </div>  */}
                       
 <div className=" mt-6 sm:mt-20 div-container">
               <div className=" div-items" ref={(ref) => (divRefs.current[0] = ref)}>
                <h1 className="text-xl ss:text-2xl italic md:text-3xl  font-medium div-fade-left	">Specialisation</h1>
                <p className="text-xs ss:text-sm sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">Our team has extensive knowledge and expertise in delivering high-quality, innovative solutions to help clients achieve their goals.</p>
                </div> 
                <span className="sm:block  bg-[#000000BF] w-1 h-80%"></span>
                <div className=" div-items" ref={(ref) => (divRefs.current[1] = ref)}>
                <h1 className="text-xl ss:text-2xl italic md:text-3xl  font-medium	div-fade-left">Transparency</h1>
                <p className="text-xs ss:text-sm sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">We value open communication and aim to build a trusting and transparent partnership with our clients.</p>
                </div> 
                <span className="sm:block bg-[#000000BF] w-1 h-80%"></span>
                <div className=" div-items" ref={(ref) => (divRefs.current[2] = ref)}>
                <h1 className="text-xl ss:text-2xl italic md:text-3xl font-medium	div-fade-left">Enterpreneurship</h1>
                <p className="text-xs ss:text-sm	 sm:text-base md:text-xl font-medium md:pt-5 div-fade-left">We are an enterprising team that is dedicated to finding creative solutions to challenges and exploring new technologies to provide the best possible solutions for our clients.</p>
                </div> 
            </div> 

          

            <div className='group mt-16 sm:mt-32'>
    <div className='mt-24 relative '>     
      <span className='h-24 w-24 right-6 -bottom-11 sm:h-40 sm:w-40 sm:right-20 sm:-bottom-20 ss:w-32 ss:h-32 ss:-bottom-16 ss:right-12
      lg:h-56 lg:w-56 lg:right-40 lg:-bottom-28
      rounded-full absolute bg-white block border-4 border-black group-hover:border-red-700 duration-500 '></span>
      <span className='w-[100%] h-1 bg-black block group-hover:bg-red-700	duration-500'>

      </span>
      
    </div>
    <div className='relative'>
    <span className='text-black absolute right-10 -top-2 sm:right-28 sm:-top-3 ss:right-16 ss:-top-4 lg:right-[14rem] lg:-top-4'> 
        <h1 className='text-xs sm:text-xl ss:text-lg font-semibold font-inter lg:text-2xl'>
          About us
        </h1>
      </span>
      </div>
      </div>

     

<div className="mt-24">
          <div
            className={`item ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}
            ref={textContainerRef}
          >
            <h1 className="text-3xl ss:text-5xl sm:text-7xl lg:text-[60px] font-normal	italic text-black">
              Your Technology <br></br> Partner for Success
            </h1>{" "}
          </div>
        </div>


<HomeAni/>

<div>
    <ImgSlider/>
</div>
        </div>

        </div>

      
    )
}