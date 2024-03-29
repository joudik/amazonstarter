import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'
const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>
      <div className="right">
        <div className="bars">
          <GoThreeBars />
        </div>
        <ul className="menu">
          <li>Collections</li>
          <li>Brand</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className="search" placeholder="Search" />

        <CgShoppingBag className="cart" />
      </div>
    </div>
  )
}

export default Header
