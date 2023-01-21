import React from 'react'
import {Routes,Route} from "react-router-dom";
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
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path ="/" element={<Home />}/> */}
            <Route path ="/" element={<FrontPage />}/>
            <Route path ="/admin" element={<HomeAd/>}/>
            <Route path="/makeupAd" element={<MakeupAd/>}/>
            <Route path="/hairAd" element={<HairAd/>}/>
            <Route path="/skinAd" element={<SkinAd/>}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/prodlist" element={<Books/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

        </Routes>
    </div>
  )
}
