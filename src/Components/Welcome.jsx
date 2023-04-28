import React from 'react'
import "./WelcomeStyles.css"


export default function Welcome(props) {
  return (
    <>
    <div className="welcome">
      <div className="first-des">
        <div className="des-text">
          <h1>Your Ultimate Beach Retreat, Where Serenity and Vintage Charm Meet</h1>
          <p>Welcome to Dar Kenza, where you can escape the chaos of city life and indulge in a serene, picturesque setting overlooking Kelibia Beach. <br/> Our spacious and unique rooms are designed with traditional vintage decor that exudes charm and character, providing you with a truly authentic experience. Immerse yourself in the peaceful atmosphere and let our exceptional hospitality take care of the rest. <br/> Whether you're looking for a romantic getaway or a family vacation, we're here to create unforgettable memories for you and your loved ones. Book your stay today and discover the perfect blend of tradition and nature at Dar Kenza.</p>
        </div>
        
      <div className='welcomeImg'>
        <img src={props.welcomeImg} alt="welcome" />
      </div>

      </div>
    </div>
      
    </>
  )
}
