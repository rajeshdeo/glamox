import React from 'react'
import { AllRoutes } from './Pages/AllRoutes'
import { Footer } from './Pages/Footer'
import { Navbar } from './Pages/Navbar'

export const Display = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}
