import React, { Component } from 'react'
import "./NavbarStyles.css"

export default class Navbar extends Component {
  render() {
    return (
        <nav className='navbar'>
          <ul className='navMenu'>
            <li><a href='/'>HOME</a></li>
            <li>ABOUT US</li>
            <li>GALLERY</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      )
  }
}
