import React from 'react'
import {Routes,Route} from "react-router-dom";
import FrontPage from '../LandingPage/FrontPage';

import Login from './Login';
import Signup from './Signup';
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path ="/" element={<Home />}/> */}
            <Route path ="/" element={<FrontPage />}/>
            <Route path ="/login" element={<Login />}/>
            <Route path ="/signup" element={<Signup />}/>
        </Routes>
    </div>
  )
}
