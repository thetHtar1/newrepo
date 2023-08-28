import Nocareer from '@/pages/assets/animations/Nocareer'
import Lottie from "lottie-react";

export default function NoCareerAni (){
    return(
<>
<div className='grid justify-items-center mb-[219px] mt-[91px]'>
<div>
<Lottie className='w-[325px] h-[325px] md:w-[526px] md:h-[526px]' animationData={Nocareer} loop={false}/>
</div>
<h1 className='text-[20px] md:text-[35px] font-semibold inter italic'>
No job vacancies currently.
</h1>
</div>
</>
    )
}