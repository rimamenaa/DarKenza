import React from 'react'
import "./HeroStyles.css"

export default function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />
        <div className='heroText'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    
    </>
  )
}
