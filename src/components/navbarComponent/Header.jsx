// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLinks from "./NavSub"
import { useState, useEffect} from "react";

import Image from "next/image";
import logo from '@/pages/assets/images/logo1.svg'
import Link from "next/link";
import { transform } from "framer-motion";

const HeaderComponent = () => {
  const [open, setOpen] =useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    if(open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <nav className="">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white">
      <div className=" flex flex-cols-2 justify-between items-center font-medium px-4 ss:px-8 pt-3 sm:pt-0 ">
        <Link href="/">
          <Image src={logo} alt="logo"/>
          {/* <h1 className="text-xl md:cursor-pointer">SmilaxGolbal</h1> */}

        </Link>
        <div
          className="sm:hidden text-black  text-3xl "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <NavLinks />
        </div>

      </div>
      <div className="px-4 ss:px-8">
      <span className={`header-underline ${isLoading ? "loading" : ""}`}></span>
      </div>
      </div>
      {/* mobile */}

      {/* <div
        className={
          open
            ? " z-40 bg-mobilebgcolor absolute right-0 h-full w-4/5 pt-16 -top-[60px]  bottom-0 text-white pl-10 duration-500 "
            : " xs:hidden bg-black absolute right-0 w-4/5 pt-16 h-full bottom-0 text-white pl-10 duration-500 "
        }
      > */}
      <div className={`fixed z-40 bg-mobilebgcolor right-0 h-full w-4/5 pt-16 bottom-0 text-white pl-10 duration-500 ${
        open ? "transform translate-x-0" : "transform translate-x-full"
      }`}>
        
        <div
          className=" top-6 text-3xl right-5 absolute "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name="close"></ion-icon>
        </div>
        <div className="h-full overflow-y-auto">
        <NavLinks />
        </div>
        </div>
       {open && <div className="fixed" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}

export default HeaderComponent;
