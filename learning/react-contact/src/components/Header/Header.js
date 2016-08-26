import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className="navbar">
    <div className="navbar-inner">
      <div className="left"></div>
      <div className="center">Issues</div>
      <div className="right">New</div>
    </div>
  </div>
)

export default Header
