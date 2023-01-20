import React from 'react'
import Navbar from './Components/Navbar'
import { Footer } from './LandingPage/Footer/footer'
import { AllRoutes } from './Pages/AllRoutes'


export const Display = () => {
  return (
    <div>
      <Navbar/>
      <AllRoutes />
     <Footer />
    </div>
  )
}
