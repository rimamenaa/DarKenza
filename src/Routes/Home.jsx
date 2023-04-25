import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Image from '../assets/12.jpg'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={Image}
    title="Dar Kenza"
    text="GUEST HOUSE"
    />
    </>
  )
}
