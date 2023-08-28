import { useRef } from "react";
import img1 from "@/pages/assets/images/homeimg1.jpg";
import img2 from "@/pages/assets/images/homeimg2.jpg";
import { useState } from "react";
import { useEffect } from "react";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import Image from "next/image";
import Link from "next/link";


export default function HomeAni() {

    
  const handleMouseMove = (e) => {
    const linkHoverReveal = e.currentTarget.querySelector(".hover-reveal");
    const linkImages = e.currentTarget.querySelector(".hidden-img");
    linkHoverReveal.style.opacity = 1;
    linkHoverReveal.style.transform = `translate(-100%, -50%) rotate(0deg)`;
    linkImages.style.transform = "scale(1, 1)";
    linkHoverReveal.style.left = e.clientX + "px";
  };

  const handleMouseLeave = (e) => {
    const linkHoverReveal = e.currentTarget.querySelector(".hover-reveal");
    const linkImages = e.currentTarget.querySelector(".hidden-img");
    linkHoverReveal.style.opacity = 0;
    linkHoverReveal.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    linkImages.style.transform = "scale(0.8, 0.8)";
  };
  
    return (     

      <nav className="homenav inter font-medium pt-[65px]">
      <ul className="ul">
        <li className="li">
          <Link href='/software-solution'>
          <div
            className="link"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ml-10 z-40	">
              <span className="text-xl sm:text-3xl lg:text-4xl">01</span>
              <span className="ml-4 text-sm sm:text-2xl lg:text-3xl">Software Solutions</span>
            </div>
        
              <ArrowForwardIcon className="text-xl  sm:text-2xl lg:text-3xl mr-8 z-40	" />
        
            <div className="hover-reveal">
              <Image className="hidden-img" src={img1} alt="" />
            </div>
          </div>
          </Link>
        </li>
        <li className="li">
          <div
            className="link"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ml-10 z-40	">
              <span className="text-xl sm:text-3xl lg:text-4xl">02</span>
              <span className="ml-4 text-sm sm:text-2xl lg:text-3xl">Web Solutions</span>
            </div>
            <ArrowForwardIcon className="text-xl sm:text-2xl lg:text-3xl mr-8 z-40	" />
            <div className="hover-reveal image01">
              <Image className="hidden-img" src={img2} alt="" />
            </div>
          </div>
        </li>
        <li className="li">
          <div
            className="link"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ml-10 z-40	">
              <span className="text-xl sm:text-3xl lg:text-4xl">03</span>
              <span className="ml-4 text-sm sm:text-2xl lg:text-3xl">Call Centre & CRM Solutions</span>
            </div>
            <Link href="/callcenter" className="z-40">
            <ArrowForwardIcon className="text-xl  sm:text-2xl lg:text-3xl mr-8 	" />
            </Link>
            <div className="hover-reveal image01">
              <Image className="hidden-img" src={img1} alt="" />
            </div>
          </div>
        </li>
        <li className="li">
          <div
            className="link"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ml-10 z-40	">
              <span className="text-xl sm:text-3xl lg:text-4xl">04</span>
              <span className="ml-4 sm:text-2xl lg:text-3xl">Security Solutions</span>
            </div>
            <Link href="/security-solution" className="z-40">
            <ArrowForwardIcon className="text-xl sm:text-2xl lg:text-3xl mr-8 	" />
            </Link>
            <div className="hover-reveal image01">
              <Image className="hidden-img" src={img2} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
    );

}


