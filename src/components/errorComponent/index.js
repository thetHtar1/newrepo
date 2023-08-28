import Image from 'next/image'
import { Inter } from 'next/font/google'
import Error from '@/pages/assets/images/Text.png'
import Header from '../navbarComponent/Header'
import Footer from '../footerComponent/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function ErrorComponent() {
  return (
    <>
    {/* <Header/> */}
   <main className='flex justify-center my-20 mt-[86px] sm:mt-[223px]'>
    
    <Image className='w-[282px] h-[141px] sm:w-[642px] sm:h-[354px]' src={Error} alt="error" width='auto' height='auto'/>
   </main>
   {/* <Footer/> */}
   </>
  )
}
