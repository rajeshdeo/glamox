import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from "../../Pages/Homepage";
import AddProduct from "./AddProduct";
import HairAd from "./HairList";
import HomeAd from "./HomeAd";
import MakeupAd from "./MakeupList";
import SkinAd from "./SkinList";


const MainRoutes = ()=>{
    return <>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/admin" element={<HomeAd/>}/>
        <Route path="/makeupAd" element={<MakeupAd/>}/>
        <Route path="/hairAd" element={<HairAd/>}/>
        <Route path="/skinAd" element={<SkinAd/>}/>
        <Route path="/add" element={<AddProduct/>}/>
    </Routes>
    </>
}

export default MainRoutes;