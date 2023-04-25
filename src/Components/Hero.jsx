import React from 'react'
import "./HeroStyles.css"
import Image from '../assets/1.jpg'

export default function Hero(props) {
  return (
    <>
    <div className='hero'>
        <img src={Image} alt="HeroImg" />
        <div className='heroText'>
            <h1>Dar Kenza</h1>
            <p>GUEST HOUSE</p>
        </div>
    </div>
    
    </>
  )
}
