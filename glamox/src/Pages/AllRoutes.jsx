import React from 'react'
import {Routes,Route} from "react-router-dom";
import FrontPage from '../LandingPage/FrontPage';
import { Books } from './Books';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path ="/" element={<Home />}/> */}
            <Route path ="/" element={<FrontPage />}/>
            <Route path ="/prodlist" element={<Books/>}/>

        </Routes>
    </div>
  )
}
