import React from 'react'
import "./WelcomeStyles.css"


export default function Welcome(props) {
  return (
    <>
    <div className="welcome">
      <img src={props.welcomeImg} className='welcomeImg' alt="" />
    </div>  
    </>
  )
}
