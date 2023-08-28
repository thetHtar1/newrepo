
import React from "react";
 import { images } from './customer_logo.js';
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const ImgSlider = () => {
  const firstTwenty = images.slice(0, 20);
  const secondTwenty = images.slice(20, 40);
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


    return (
      <>
       
        <div className=" mb-16">
          <div
            className={`item ${
              isVisible ? "fade-and-scroll-right-to-left" : ""
            }`}
            ref={textContainerRef}
          >
            <h1 className="text-3xl ss:text-5xl sm:text-7xl lg:text-[60px] font-normal italic text-black">
              Our Successful <br></br> Customer
            </h1>{" "}
          </div>
        </div>
        <div className="mb-32">
        <div className=" ">
          <Marquee speed={30} className="marquee" gradient={false}>
        {firstTwenty.map((data) => (
              <div className="slide">
                <Image className="w-full h-20 sm:h-24 sliderImage" src={data.img} alt="img1" />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="mt-6 lg:mt-12">
          <Marquee
            speed={30}
            className="marquee"
            gradient={false}
            direction="right"
          >
            {secondTwenty.map((data) => (
              <div className="slide">
                <Image className="w-full h-20 sm:h-24 sliderImage" src={data.img} alt="img1" />
              </div>
            ))}
          </Marquee>
        </div>
        </div>
      </>
    );
};

export default ImgSlider;