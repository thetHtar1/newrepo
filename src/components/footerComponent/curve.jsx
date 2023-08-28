import Image from "next/image"
import curve from '@/pages/assets/images/curve1.png'
import React, { useEffect, useState } from 'react';

export default function Curve() {
    useEffect(() => {
        const handleScroll = () => {
          const scroll = document.querySelector('.curve');
          const value = 1+ window.scrollY / -2800;
          scroll.style.transform = `scaleY(${value})`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
 
      return(
        
        <section className="section-durve" >
            <span className="curve" >
                <Image className="curve-img" src={curve} />
            </span>
        </section>
       
    )
}