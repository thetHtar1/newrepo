'use client'
import { newscontent } from "./newscontent";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NewsAndEventComponent() {
  const [showContent, setShowContent] = useState([]);
  const [showAni, setShowAni] = useState(false);





  useEffect(() => {
    const delay = 800;
    let timeoutId
    const showNextCard = (index) => {
      if (index < newscontent.length) {
        timeoutId = setTimeout(() => {
          setShowContent((prev) => [...prev, index]);
          showNextCard(index + 1);
        }, delay);
      }
    };

    showNextCard(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* <Header/> */}
      <div className="px-4 ss:px-8 lg:px-16 mb-[145px] text-black">
        <div className="mt-[86px] sm:mt-[118px]">
          <h1 className="text-black rany text-3xl font-medium ss:text-4xl md:text-6xl lg:text-7xl team-header">
            News and Events
          </h1>
          <p className="mt-[15px] md:mt-[31px] text-[12px] md:text-[20px] inter font-normal team-para">
            Smilax Global staff, processes and technology give you the information to notice trends and anticipate training needs, increase responsiveness to your internal customers, and ultimately help you to secure the reputation of providing quality service to those you service every day.
          </p>
        </div>
        <div className="">
          <div className={` grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 ${showContent ? 'show' : ''}`}>
            {newscontent?.map((data, index) => (

              <div key={index}
                className={` mt-5 menber-list ${showContent.includes(index) ? 'show' : ''
                  }`} >


                <div className=" px-5 py-2 border border-solid rounded-2xl border-black ">
                  <Image className="w-96 h-48   object-contain	" src={data.img} alt={data.content} />

                </div>

                <div className="border-b-2 border-solid border-black">
                  <p className="  font-semibold xl:text-[23px] lg:text-[18px] sm:text-[20px] ss:text-[18px] text-[16px] inter">{data.content}</p>
                  <p className="mb-2  text-[12px] lg:text-[16px] inter italic font-light	">{data.position}</p>
                </div>
              </div>





            ))}

          </div>
        </div>

      </div>
    </>
  )
}