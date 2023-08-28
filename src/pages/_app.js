import React , { useEffect,useState } from 'react';
import '@/styles/globals.css'
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Lottie from "lottie-react";
import pagetransition from "@/pages/assets/animations/pagetransition";
import Header from '../components/navbarComponent/Header';
import Footer from '../components/footerComponent/Footer';
import Footer1 from './footer1';

export default function App({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },[2000])
},[])
  
  return (
    <ChakraProvider>
       <Head>
        <title>Smilax Global </title>
      </Head>

      {loading ? (
        <>
          <div className="h-full w-full flex-1 ">
          {/* <div className=" fixed  w-full h-screen"> */}
            <Lottie animationData={pagetransition} loop={false} />
          </div>
        </>
      ) : (
         <>
          <Header />
          <Component {...pageProps} />
          <Footer1 />
         </>
      )}


    </ChakraProvider>
  )
}
