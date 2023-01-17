import React from 'react'
import Navbar from './Components/Navbar'
import { NavbarDropdown } from './Components/NavbarDropdown'

export const Display = () => {
  return (
    <div>
      <Navbar/>
      <NavbarDropdown/>
    </div>
  )
}
