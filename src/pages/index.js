import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cookie from '../pages/cookie'
import HomePage from '../pages/Home'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
   <main className=''>
    
    {/* <Header/> */}
    <HomePage/>
    {/* <Curve/> */}
<Cookie/>


      {/* <Footer/> */}
      
     
     {/* <NavSub/> */}
     
   </main>
  )
}
