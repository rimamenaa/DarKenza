import React from 'react'
import "./WelcomeStyles.css"


export default function Welcome(props) {
  return (
    <>
    <div className="welcome">
      <div className='welcomeText'>
      <h1>Welcome peeps!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure eum explicabo ab omnis. Eum quidem ipsam voluptatem dolores, eos animi atque id explicabo cumque delectus vero laudantium. Ad, illum!</p>
      </div>
      
      <img src={props.welcomeImg} className='welcomeImg' alt="" />
    </div>  
    </>
  )
}
