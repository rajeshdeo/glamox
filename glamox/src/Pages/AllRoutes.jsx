import React from 'react'
import {Routes,Route} from "react-router-dom";

import PaymentsPage from '../Components/PaymentsPage';
import SuccessPayment from '../Components/SuccessPayment';
import AddProduct from '../admin/PagesAd/AddProduct';
import HairAd from '../admin/PagesAd/HairList';
import HomeAd from '../admin/PagesAd/HomeAd';
import MakeupAd from '../admin/PagesAd/MakeupList';
import SkinAd from '../admin/PagesAd/SkinList';
import FrontPage from '../LandingPage/FrontPage';
import { Books } from './Books';
// import { Home } from './Home';
import Login from './Login';
import Signup from './Signup';
import SingleProduct from './SingleProduct';
import LoginAdmin from './LoginAdmin';
import PrivateRoute from '../Components/PrivateRoute';
import LoaderPage from '../Components/LoaderPage';
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path ="/" element={<Home />}/> */}
            <Route path ="/" element={<FrontPage />}/>
            <Route path='/loader' element={<LoaderPage/>}/>
            <Route path="/payments" element={<PaymentsPage/>}/>
            <Route path="/successpayment" element={<SuccessPayment/>}/>
            <Route path ="/admin" element={<PrivateRoute><HomeAd/></PrivateRoute>}/>
            <Route path="/makeupAd" element={<MakeupAd/>}/>
            <Route path="/hairAd" element={<HairAd/>}/>
            <Route path="/skinAd" element={<SkinAd/>}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/prodlist/:category" element={<Books/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adlogin" element={<LoginAdmin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/:category/:P_id" element={<SingleProduct/>}/>
            
        </Routes>
    </div>
  )
}
