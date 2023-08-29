'use client'

import { useRef, useEffect, useState } from "react";

import Image from "next/image";
import img1 from "../../../public/images/security1.png";
import img2 from "../../../public/images/security2.png";

export default function SecurityComponent() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

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
            delay += 600; // Adjust the delay between each div
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
  
    return (

        <>
        {/* <Header/> */}
     <div className="inter px-4 ss:px-8 lg:px-16 pb-6 mb-6 ">
       <div className="pt-3 job-banner mt-[86px] sm:mt-[118px]">
        <h1 className="rany text-black text-3xl font-medium ss:text-4xl md:text-6xl lg:text-7xl Security-title">
            Security Solutions
        </h1>
       </div>

       <div className='security-image-container hidden md:block h-full'  >
      <div className={`security-image md:flex   gap-5 md:mt-14 w-full ${showImage ? 'show' : ''}`}>
        <Image className='md:basis-1/2 w-96' src={img1} alt="security1" />
        <Image className='md:basis-1/2 w-96' src={img2} alt="security2" />
      </div>
    </div>
      

       <div className="mt-7 md:mt-14 flex flex-col lg:flex-row gap-4 md:flex-row security-body ">
        <div className="flex flex-col gap-4 basis-1/2 securtiy-body-items" ref={(ref) => (divRefs.current[0] = ref)}>
        <div className="items-security ">
            <h1 className="text-sm font-semibold ss:text-xl text-black">
                Access Control
            </h1>
            <p className="text-sm font-normal	ss:text-base text-black">
                Solutions Availiable in Nextwork and Standalone Solition.
            </p>
            <button className="underline text-sm font-normal ss:text-base text-black">Get more info</button>
        </div>
        <div className="items-security">
            <h1 className="text-sm font-semibold  ss:text-xl text-black">
               Surveillance System
            </h1>
            <p className="text-sm font-normal	ss:text-base text-black">
                H265 Models with Starlight Technology and support 4K Resolutions. Elevator Access Control
                System Allow people access to certain floors within a sechduled time frame.
            </p>
            <button className="underline text-sm font-normal ss:text-base text-black">Get more info</button>
        </div>
        <div className="items-security">
            <h1 className="text-sm font-semibold  ss:text-xl text-black">
            Public Address System
            </h1>
            <p className="text-sm font-normal ss:text-base	text-black">
                Used to allow a person to address a large public areas.
            </p>
            <button className="underline text-sm font-normal ss:text-base text-black">Get more info</button>
        </div>
        <div className="items-security">
            <h1 className="text-sm font-semibold  ss:text-xl text-black">
          Multi Apartment Viedo Intercom System 
            </h1>
            <p className="text-sm font-normal ss:text-base	text-black">
           Standalone intercom system used to manage calls made at the entrance to a 
           building with access controlled by audiovisual communication between inside and outside. 
                     </p>
            <button className="underline text-sm font-normal ss:text-base text-black">Get more info</button>
        </div>
        </div>
        <div className="flex flex-col gap-4 basis-1/2 securtiy-body-items" ref={(ref) => (divRefs.current[1] = ref)}>
        <div className="items-security">
            <h1 className="text-sm font-semibold  ss:text-xl text-black">
                Fire Alarm System
            </h1>
            <p className="text-sm font-normal	ss:text-base text-black">
                To detect and warn people through visual and audio appliances when smoke, fire, carbon
                monoxide or other
                emergencies are present.
            </p>
            <button className="underline text-sm font-normal ss:text-base text-black">Get more info</button>
        </div>
        <div className="items-security">
            <h1 className="text-sm font-semibold ss:text-xl text-black">
     Automatic Gate Control System 
            </h1>
            <p className="text-sm font-normal	ss:text-base text-black">
                Can provide parking solutions with guikding system for Drivers can be parked at certain places by
                showing visual sign, Cupidatat non prodient, sunt in culpa qui officia deserunt mollit.
            </p>
            <button className="text-black underline text-sm font-normal ss:text-base">Get more info</button>
        </div>
        <div className="items-security">
            <h1 className="text-sm font-semibold ss:text-xl text-black">
                Parking Guidance System
            </h1>
            <p className="text-sm font-normal	ss:text-base text-black">
            Can provide parking solutions with guikding system for Drivers can be parked at certain places by
                showing visual sign, Cupidatat non prodient, sunt in culpa qui officia deserunt mollit.
            </p>
            <button className="text-black underline text-sm font-normal ss:text-base">Get more info</button>
        </div>
        </div>
       </div>
     </div>
     {/* <Footer/> */}
     </>
    )
  }