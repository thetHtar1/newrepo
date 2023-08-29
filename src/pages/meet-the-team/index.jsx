import React from 'react'
import Image from "next/image";
import Menu from '../../components/menu/Menu';
import FooterCurve from '../../components/FooterCurve';
import Footer from '../../components/footer/Footer';
import MeetTeamComponent from '../../components/meetteamComponent'
export default function MeetTheTeam() {
  return (
    <>
    <Menu/>
    <MeetTeamComponent/>


    <FooterCurve/>
<Footer/>
    </>
  )
}
