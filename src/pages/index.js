import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/navbarComponent/Header'
import Footer from '../components/footerComponent/Footer'
import HomeBody from '../components/HomeComponent/HomeBody'
import Cookies from '../components/footerComponent/cookie'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
   <main className=''>
    
    {/* <Header/> */}
    <HomeBody/>
    {/* <Curve/> */}
<Cookies/>


      {/* <Footer/> */}
      
     
     {/* <NavSub/> */}
     
   </main>
  )
}
