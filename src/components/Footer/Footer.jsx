import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from '@heroicons/react/outline'
export const Footer = () => {
  return (
    <div className="f-wrapper">
      <hr />
      <div className="c-footer">
        <div className="f-logo">
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <LocationMarkerIcon className="icon" />
              <span>11 north avenue, 328876</span>
            </span>
            <span className="pngLine">
              <PhoneIcon className="icon" />
              <span>0940002041</span>
            </span>
            <span className="pngLine">
              <InboxIcon className="icon" />
              <span>joudkriem1998@gmail.com</span>
            </span>
          </div>
        </div>
        <div className="block">
          <div className="detail">
            <span>Account</span>
            <span className="pngLine">
              <LoginIcon className="icon" />
              <span>Sign In</span>
            </span>
          </div>
        </div>
        <div className="block">
          <div className="detail">
            <span>Company</span>
            <span className="pngLine">
              <UsersIcon className="icon" />
              <span>Account</span>
            </span>
          </div>
        </div>
        <div className="block">
          <div className="detail">
            <span>Resources</span>
            <span className="pngLine">
              <LinkIcon className="icon" />
              <span>jawwsite.com</span>
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <span>Copyright 2022 by amazon</span>
        <span> All rights reserved</span>
      </div>
    </div>
  )
}
