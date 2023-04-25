import React, { Component } from 'react'
import "./NavbarStyles.css"
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
        <nav className='navbar'>
          <ul className='navMenu'>
            
            {MenuItems.map((item, i) => {
              return (
                <li key={i}><Link className={item.cName} to={item.url}>{item.title}</Link></li>
              )
            })}

          </ul>
        </nav>
      )
  }
}
