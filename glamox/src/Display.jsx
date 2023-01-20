import React from 'react'
import { Footer } from './LandingPage/Footer/footer'
import { AllRoutes } from './Pages/AllRoutes'

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
