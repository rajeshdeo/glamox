import React from 'react'
import {Routes,Route} from "react-router-dom";
import FrontPage from '../LandingPage/FrontPage';
import { Home } from './Home';
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path ="/" element={<Home />}/> */}
            <Route path ="/" element={<FrontPage />}/>
            
        </Routes>
    </div>
  )
}
