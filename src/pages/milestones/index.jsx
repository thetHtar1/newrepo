import line from '@/pages/assets/images/milestones.png'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Milestones () {
    const [text, setText] = useState("");
    const originalText = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh.",
      ];
      let currentText = "";
      let currentIndex = 0;
      const [showNextDiv, setShowNextDiv] = useState(false);

    
      useEffect(() => {
        const typingInterval = setInterval(() => {
          if (currentIndex < originalText[0].length) {
            currentText += originalText[0][currentIndex];
            setText(currentText);
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setShowNextDiv(true);
          }
        }, 50);
    
        return () => {
          clearInterval(typingInterval);
        };
      }, []);
      useEffect(() => {
        const delayTimeout = setTimeout(() => {
          // Trigger typing effect after a delay
          setText("");
          currentText = "";
          currentIndex = 0;
        }, 2400); // Set the desired delay in milliseconds (2000 milliseconds = 2 seconds)
      
        return () => {
          clearTimeout(delayTimeout);
        };
      }, []);

      
    
    return(
        <>
        <div className="mb-12  mt-[86px] sm:mt-[118px] inter">
            <div className=" mb-4  px-4 ss:px-8 lg:px-16 ">
                <h1 className="rany text-3xl font-medium sm:text-[50px] xl:text-[80px] contact-us-title ">
                Proudly Moving Forward
                </h1>
                <p className="sm:mt-[26px] mt-[21px] contact-us-para text-justify">Proudly moving forward is what we do best here at Smilax Global. Our unwavering commitment to innovation and progress has allowed us to achieve countless milestones throughout our company's history. Our journey towards success has been filled with challenges and obstacles, but we have never been deterred. Instead, we have used each hurdle as an opportunity to learn, grow, and evolve. 
We are thrilled to share with you the moments that we have proud :</p>


<div className='timeline mt-[21px] h-full sm:ml-14 '>
  
        <div className='sectionmilestones'>
            <div><h1 className="sm:text-[30px]">
            january<br/>2023
        </h1></div>
        <div className='line'> </div>
{/* <div className='bead'></div> */}
<div className='content'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
       <div className=''>
       <p className='text-[12px] sm:text-[20px] '>{text} </p>
         </div>
</div>
       
    </div>
</div>



<span className='block h-[1px] w-full bg-black mt-[38px]'></span>

<div className=''>
{showNextDiv && 

<div className='timeline mt-[21px] h-full sm:ml-14 flex flex-col gap-6'>
<div class="block w-[1px] bg-black absolute h-full left-[123px] transform -translate-x-1/2"></div>
  
<div className='sectionmilestones'>
    <div><h1 className="sm:text-[30px]">
    january<br/>2023
</h1></div>

{/* <div className='line'> </div> */}
{/* <div className='bead'></div> */}
<div className='content1'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
<div className=''>
<p className='text-[12px] sm:text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet. </p>
 </div>
</div>

</div>

<div className='sectionmilestones'>
    <div><h1 className="sm:text-[30px]">
    january<br/>2023
</h1></div>

{/* <div className='line'> </div> */}
{/* <div className='bead'></div> */}
<div className='content1'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
<div className=''>
<p className='text-[12px] sm:text-[20px] '>{text} </p>
 </div>
</div>

</div>

<div className='sectionmilestones'>
    <div><h1 className="sm:text-[30px]">
    january<br/>2023
</h1></div>

{/* <div className='line'> </div> */}
{/* <div className='bead'></div> */}
<div className='content1'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
<div className=''>
<p className='text-[12px] sm:text-[20px] '>{text} </p>
 </div>
</div>

</div>
</div>



}
</div>



<div className=''>

{showNextDiv && 
<>
    <span className='block h-[1px] w-full bg-black mt-[38px]'></span>
<div className='timeline mt-[21px] h-full sm:ml-14 flex flex-col gap-6'>
<div class="block w-[1px] bg-black absolute h-full left-[123px] transform -translate-x-1/2"></div>
  
<div className='sectionmilestones'>
    <div><h1 className="sm:text-[30px]">
    january<br/>2023
</h1></div>

{/* <div className='line'> </div> */}
{/* <div className='bead'></div> */}
<div className='content1'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
<div className=''>
<p className='text-[12px] sm:text-[20px] '>{text} </p>
 </div>
</div>

</div>

<div className='sectionmilestones'>
    <div><h1 className="sm:text-[30px]">
    january<br/>2023
</h1></div>

{/* <div className='line'> </div> */}
{/* <div className='bead'></div> */}
<div className='content1'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
<div className=''>
<p className='text-[12px] sm:text-[20px] '>{text} </p>
 </div>
</div>

</div>

<div className='sectionmilestones'>
    <div><h1 className="sm:text-[30px]">
    january<br/>2023
</h1></div>

{/* <div className='line'> </div> */}
{/* <div className='bead'></div> */}
<div className='content1'>
<h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
<div className=''>
<p className='text-[12px] sm:text-[20px] '>{text} </p>
 </div>
</div>

</div>
</div>


</>
}
</div>

</div>

{/* <div className='flex gap-3 mt-[21px] h-full sm:ml-14'>
    <div>
        <h1 className="sm:text-[30px]">
            january<br/>2023
        </h1>
    </div>
    <div className=' h-[140px]'>
 <Image className=''  src={line} alt='line'/>
    </div>
    <div>
       
       <h1 className='text-[16px] sm:text-[30px] font-semibold	'>Project name</h1>
       <div className=''>
       <p className='text-[12px] sm:text-[20px] '>{text} </p>
         </div>
    </div>
</div> */}
           
           
            </div>
        </>
    )
}