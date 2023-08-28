import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Curve from './curve'
import Link from 'next/link'
import {  sendContactForm } from '@/lib/api'
import Input from '@/GlobalForm/Input'
import { useForm } from "react-hook-form"

const inter = Inter({ subsets: ['latin'] })

export default function FooterComponent1() {
  const defaultValues = {
    sub: ''
  }

  const {  control, handleSubmit, reset, formState: { errors }} = useForm({defaultValues})

  const onSubmit = async data => {
    sendContactForm(data)
    reset({sub: ''})
  }

  return (
    <>
    <main className='bg-black px-10 md:px-20'>
      <div className=''>
      <div className='pt-24 sm:pt-72'>
        <h1 className=' text-3xl sm:text-7xl text-white italic rany	'>Start a project <br></br> with us</h1>
      </div>
      <div className='group'>
        <div className='mt-24 relative '>     
          <span className='h-24 w-24 right-6 -bottom-11 sm:h-40 sm:w-40 sm:right-20 sm:-bottom-20 ss:w-32 ss:h-32 ss:-bottom-16 ss:right-12
          lg:h-56 lg:w-56 lg:right-40 lg:-bottom-28
          rounded-full absolute bg-black block border-4 boder-white group-hover:border-red-700 duration-500 '></span>
          <span className='w-[100%] h-1 bg-white block group-hover:bg-red-700	duration-500'>
          </span>
        </div>
        <div className='relative'>
          <span className='text-white absolute right-10 -top-2 sm:right-28 sm:-top-3 ss:right-16 ss:-top-4 lg:right-52 lg:-top-4'> 
            <h1 className='text-xs sm:text-xl ss:text-lg font-semibold font-inter lg:text-2xl'>
              Contact us
            </h1>
          </span>
        </div>
      </div>
      <div className='mt-20 sm:mt-40 font-inter flex flex-col justify-start gap-11  sm:flex-row sm:justify-between sm:items-end'>
        <div>
          <div>
          <h3 className='lg:text-5xl	text-white font-bold sm:text-2xl xs:text-3xl'>Everthing is<br></br> Possible</h3>
          </div>
          <div>
            <h3 className='text-xs font-normal text-white'>Zarchi Khin Kyaw</h3>
          </div>
        </div>
        <div className=''>
          <div>
            <h1 className='lg:text-3xl text-white font-light text-base	'>Stay Informed</h1>
          </div>
          <div className='flex flex-col sm:flex-row relative pt-2 '>
            <div>
              <Input control={control} name="sub" errors={errors} className="bg-transparent text-white border-b-2 lg:pr-20 sm:border-r border-r-0 sm:w-10/12 xs:w-full" placeholder='Your Email Please' validateEmail={true} errorDisabled={true} errorMessage="Email required" />
            </div>
            <div>
              <button className='border ml-2 rounded-full	px-2 py-1 absolute right-2  text-white hover:bg-white hover:text-black duration-500 mt-3 sm:-right-16 sm:-top-3' onClick={handleSubmit(onSubmit)}>Subscribe</button>
            </div>
          </div>
        </div>
        {/* icon email */}
        <div className='mt-12'>
          <div className='flex flex-cols-3 gap-6 text-xl text-white'>
            {/* facebook icon */}
            <div>
              <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='icon' d="M15.5 1.5H11.75C10.0924 1.5 8.50269 2.15848 7.33058 3.33058C6.15848 4.50268 5.5 6.0924 5.5 7.75V11.5H1.75V16.5H5.5V26.5H10.5V16.5H14.25L15.5 11.5H10.5V7.75C10.5 7.41848 10.6317 7.10054 10.8661 6.86612C11.1005 6.6317 11.4185 6.5 11.75 6.5H15.5V1.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            {/* linkedin icon */}
          <div className='flex group'>  
          <div>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='group-hover:fill-white' d="M4 6.5C5.38071 6.5 6.5 5.38071 6.5 4C6.5 2.61929 5.38071 1.5 4 1.5C2.61929 1.5 1.5 2.61929 1.5 4C1.5 5.38071 2.61929 6.5 4 6.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='group-hover:fill-white' d="M6.5 1.25H1.5V16.25H6.5V1.25Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className='linkedinicon'>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='group-hover:fill-white' d="M9 1C10.9891 1 12.8968 1.79018 14.3033 3.1967C15.7098 4.60322 16.5 6.51088 16.5 8.5V17.25H11.5V8.5C11.5 7.83696 11.2366 7.20107 10.7678 6.73223C10.2989 6.26339 9.66304 6 9 6C8.33696 6 7.70107 6.26339 7.23223 6.73223C6.76339 7.20107 6.5 7.83696 6.5 8.5V17.25H1.5V8.5C1.5 6.51088 2.29018 4.60322 3.6967 3.1967C5.10322 1.79018 7.01088 1 9 1Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div> 

        </div>
          <div >
            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='icon' d="M28.75 1.75C27.553 2.59434 26.2276 3.24013 24.825 3.6625C24.0722 2.79688 23.0717 2.18336 21.9588
              1.9049C20.8459 1.62645 19.6744 1.69649 18.6026 2.10556C17.5308 2.51464 16.6106 3.243 15.9662 4.19214C15.3219 5.14129 14.9846
                6.26542 15 7.4125V8.6625C12.8033 8.71946 10.6266 8.23226 8.66376 7.2443C6.70093 6.25635 5.0129 4.79829 3.75 3C3.75 3 -1.25
                14.25 10 19.25C7.42566 20.9975 4.35895 21.8737 1.25 21.75C12.5 28 26.25 21.75 26.25 7.375C26.2488 7.02681 26.2154 6.67949
                  26.15 6.3375C27.4258 5.07936 28.326 3.49089 28.75 1.75Z" 
                  stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className='text-white lg:text-xl	text-base	'>
            <a>contact@smilaxglobal.com</a>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className='mt-12 pb-6 flex flex-col sm:flex-row text-xs justify-center sm:text-lg '>
        <div className='text-white text-center '>
          <h1> © 2023 Smilax Global Co., Ltd. All Rights Reserved.| </h1>
        </div>
        <div  className='text-white text-center  flex flex-row justify-center  '>
          <div className='relative cursor-pointer'>
            <Link href="/terms-of-services">
              <h1 className='underlineani'> Terms of Services | </h1>
            </Link>
          </div>
          <div className='relative'>
            <Link href="/privacy-policy">
            <h1 className='underlineani'>Privacy Policy</h1>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
   </>

  )}