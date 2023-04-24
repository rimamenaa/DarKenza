import React, { Component } from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems'

export default class Navbar extends Component {
  render() {
    return (
        <nav className='navbar'>
          <ul className='navMenu'>
            
            {MenuItems.map((item, i) => {
              return (
                <li key={i}><a className={item.cName} href='/'>{item.title}</a></li>
              )
            })}

          </ul>
        </nav>
      )
  }
}
