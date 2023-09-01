'use client'
import { useState, useRef, useEffect } from "react";
import {ArrowDownIcon} from '@chakra-ui/icons'
import { ArrowUpIcon } from "@chakra-ui/icons";
import {CareerData} from './careerdata'
import { Icon } from '@iconify/react';
import Link from "next/link";

export default function CareersComponent() {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const textRef = useRef(null);

  const toggleDropdown = (index) => {
 
    setOpenDropdowns((prevOpenDropdowns) => {
      const updatedOpenDropdowns = [...prevOpenDropdowns];
      updatedOpenDropdowns[index] = !updatedOpenDropdowns[index];
      return updatedOpenDropdowns;
  
    });

  };

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('slide-in-job');
    }
  }, []);

    return(
        <>
        {/* <Header/> */}
        <div className="inter px-4 ss:px-8 lg:px-16 font-semibold mb-96 mt-[86px] sm:mt-[118px] text-black">
            <div className=" mb-6 md:mb-20">
            <div className=" job-banner">
              <h1 className="text-black rany text-3xl font-medium ss:text-4xl lg:text-7xl ">
              Be part of <br></br>our success story
              </h1>
            </div>
           
            </div>
            {CareerData?.map((data, index) => (
            
                          <div key={index} className="border-t border-gray-400 py-2 sm:py-4 lg:py-4  " onClick={() => toggleDropdown(data.id)}>
                          <div className="flex justify-between " >
                              <h6 className="sm:text-2xl lg:text-2xl text-black">
                                  {data.position}
                              </h6>
                              <div className="flex">
                                  <h6 className="sm:text-2xl lg:text-2xl text-black">{data.positionQty}</h6>
                                  {openDropdowns[data.id] ? (
                                <ArrowUpIcon
                                  className="mt-1 sm:text-2xl lg:text-2xl"
                                  onClick={() => toggleDropdown(data.id)}
                                />
                              ) : (
                                <ArrowDownIcon
                                  className="mt-1 sm:text-2xl lg:text-2xl"
                                  onClick={() => toggleDropdown(data.id)}
                                />
                              )}
                              </div>
              
                          </div>
                          <div className={`details ${openDropdowns[data.id] ? "open" : "closed"}`}>
                          <div className="mt-4">
                              <h1 className="text-sm text-black">Job Description:</h1>
                              <h1 className="text-sm text-black">{data.jobDescription}</h1>
                          </div>
                          <div>
                              <h1 className="text-sm text-black">Responsibilities :</h1>
                              <ul >
                                  <li className="list-disc text-sm ml-4 text-black">{data.Responsibility1}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Responsibility2}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Responsibility3}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Responsibility4}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Responsibility5}</li>
                              </ul>
                          </div>
                          <div>
                              <h1 className="text-sm text-black">Requirements :</h1>
                              <ul>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements1}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements2}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements3}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements4}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements5}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements6}</li>
                                  <li className="list-disc text-sm ml-4 text-black">{data.Requirements7}</li>
              
              
                              </ul>
                          </div>
                          <div className="text-center	my-4">
                            <Link href='/career-application-form'>
                          <button className='text-black	border-black border-solid border px-2 rounded-2xl md:py-1 md:rounded-3xl hover:bg-black hover:text-white'><span className="flex ">Upload your cv <Icon className='mt-1 ms-3' icon="bi:upload" /></span> </button>
                          </Link>
                          </div>
                          </div>
                          </div>
            ))} 

<hr className="h-px bg-gray-400 border-0 "></hr>

 
          
        </div>
        {/* <Footer/> */}
        </>
    )
}