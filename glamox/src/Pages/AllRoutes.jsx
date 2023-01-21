import React from 'react'
import {Routes,Route} from "react-router-dom";
import PaymentsPage from '../Components/PaymentsPage';
import SuccessPayment from '../Components/SuccessPayment';
import FrontPage from '../LandingPage/FrontPage';
import { Home } from './Home';
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path ="/" element={<Home />}/> */}
            <Route path ="/" element={<FrontPage />}/>
            <Route path="/payments" element={<PaymentsPage/>}/>
            <Route path="/successpayment" element={<SuccessPayment/>}/>
        </Routes>
    </div>
  )
}
