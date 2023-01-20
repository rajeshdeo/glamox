import React from 'react'
import Navbar from './Components/Navbar'
import { NavbarDropdown } from './Components/NavbarDropdown'
import PaymentsPage from './Components/PaymentsPage'

export const Display = () => {
  return (
    <div>
      <Navbar/>
     <PaymentsPage/>
    </div>
  )
}
