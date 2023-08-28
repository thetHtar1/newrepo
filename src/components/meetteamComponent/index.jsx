import { teamManber } from "@components/meetteamComponent/teamManber";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MeetTeamComponent (){
    const [showMenber, setShowMenber] = useState([]);
    const [showAni, setShowAni] = useState(false);

    let timeoutId

    console.log(teamManber, ` hello worlg doog to go `)


useEffect(() => {
  const delay = 800; 
  
  const showNextCard = (index) => {
    if (index < teamManber.length) {
      timeoutId = setTimeout(() => {
        setShowMenber((prev) => [...prev, index]);
        showNextCard(index + 1);
      }, delay);
    }
  };

  showNextCard(0);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);

    return(
        <>
        {/* <Header/> */}
        <div className="px-4 ss:px-8 lg:px-16 mb-[145px]">
            <div className="mt-[86px] sm:mt-[118px]">
                <h1 className="rany text-3xl font-medium ss:text-4xl md:text-6xl lg:text-7xl team-header">
                    The People Who <br></br> make the magic happen.
                </h1>
                <p className="mt-[15px] md:mt-[31px] text-[12px] md:text-[20px] inter font-normal team-para">
                At Smilax Global, we are proud to have a talented and dedicated team that brings a wealth of experience and expertise to everything we do. 
                We understand that our success is built on the hard work and commitment of each member of our team. Let's get to know some of them:
                </p>
            </div>
            <div className="">
            <div className={`menber-container grid ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[7px] ${showMenber ? 'show' : ''}`}>
            {teamManber?.map((data,index)=>(
  <div
  key={index}
  className={`menber-list ${
    showMenber.includes(index) ? 'show' : ''
  }`}
>
   
 <div className="flex flex-col text-center items-center px-[56px] pt-[64px] pb-[7px] group staff-img">
 {/* <div className="hidden group-hover:block" > */}
 <div>
     <Image className="staff-img rounded-full  object-cover	" src={data.img} alt={data.name}
     />
 </div>
 {/* <div className=" group-hover:hidden" >
     <Image className=" h-full w-full	" src={data.newImg} alt={data.name}
     />
 </div> */}
 {/* <div className="absolute bottom-7 hidden group-hover:block text-white  "> */}
 <div className="">
 <h1 className=" mt-[30px] lg:mt-[56px] font-semibold xl:text-[23px] lg:text-[18px] sm:text-[20px] ss:text-[18px] text-[20px] inter">{data.name}</h1>
 <p className="  text-[20px] inter italic font-light	">{data.position}</p>
 </div>
 </div>
 
 
</div>

            ))}
            
            </div>
            </div>
           
        </div>
        </>
    )
}