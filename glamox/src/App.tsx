import React from 'react';
import MainRoutes from './admin/PagesAd/MainRoutes';
import './App.css';
import { Display } from './Display';
import Navbar from './Pages/Navbar';



function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <MainRoutes/>
    </div>
  );
}

export default App;
