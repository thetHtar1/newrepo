import { useState } from 'react';
import {menus} from './smilaxmenu.js'
import Link from 'next/link';
const NavLinks = () => {
  const  [heading, setHeading] = useState("")

    return (
      <>
        {menus.map((data) => (
          <div>
            <div className=" px-3 md:cursor-pointer group font-inter ">
            <Link href={data.url}>
              <h1
                className="py-6 hover:text-gray-400 transition-800 flex sm:justify-between items-center sm:pr-0 pr-5 text-2xl sm:text-base	lg:text-lg "
                onClick={() =>
                  heading !== data.name ? setHeading(data.name) : setHeading("")
                }
              >
                {data.name}

                {data.submenu && (
                  <>
                  <span  className="text-xl sm:hidden inline pt-2 ">
                    {data.submenu && <ion-icon
                    name={`${
                      heading === data.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                  }
                  </span>
                  <span className="text-xl sm:mt-1 sm:ml-2 sm:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span> 
                  </>
                )}

                {/* down button */}
                {/* <span className="text-xl sm:hidden inline">
                  <ion-icon
                    name={`${
                      heading === data.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl sm:mt-1 sm:ml-2 sm:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span> */}
                {/* down button */}
              </h1>
              </Link>
              {data.submenu && (
                <div className=' '>
                  <div className="invisible  project h-0 absolute top-20  sm:left-28 sm:w-8/12 md:left-96 md:w-7/12 group-hover:sm:visible group-hover:sm:h-full">
                    <div className="py-3">
                      <div className="w-50 h-50 left-3 absolute mt-1 bg-gray-400 rotate-45"></div>
                    </div>
                    <div className="z-40 relative bg-white shadow-[0_4px_4px_3px_rgba(0,0,0,0.25)] p-10 grid grid-cols-2 gap-4 rounded-2xl ">
                      {data.subname.map((oursubmenu) => (
                        <div className="flex flex-cols-2 ">
                         <Link href={oursubmenu.setUrl}>
                          <div className='sideBorder sideBorderL'>
                          <h1 className="text-lg font-semibold ml-2">
                            {oursubmenu.title}
                          </h1>
                          <h1 className='text-sm  ml-2'>{oursubmenu.desc}</h1>
                          </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* mobile menu */}

            <div
              className={`${heading === data.name ? "sm:hidden" : "hidden"}`}
            >
              {/* sublinks */}
              {data.subname?.map((sname) => (
                <div>
                  <div>
                    <Link href={sname.setUrl}>
                    <h1 className="py-4 pl-7 font-lg sm:pr-0 pr-5">
                      {sname.title}
                    </h1>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
}

export default NavLinks