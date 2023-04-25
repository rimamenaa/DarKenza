import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import HeroImage from '../assets/12.jpg'
import Welcome from '../Components/Welcome'
import welcomeImage from '../assets/1.jpg'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={HeroImage}
    title="Dar Kenza"
    text="GUEST HOUSE"
    />
    <Welcome
    welcomeImg={welcomeImage}/>
    </>
  )
}
