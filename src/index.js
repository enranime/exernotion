import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddActivity from './Page/AddActivity';
import ActivityHistory from './Page/ActivityHistory';
import Footer from "./Component/Footer/Footer"
import Navbar from "./Component/Navbar/Navbar"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(

      // <BrowserRouter>
      // <Navbar/>
      //    <Routes>
      //      <Route path="exernotion/" element={<AddActivity/>} />
      //      <Route path="exernotion/activity-history" element={<ActivityHistory/>}/>
      //    </Routes>
      //    <Footer/>
      // </BrowserRouter>
      <h1>helloworld</h1>
  ,
  document.getElementById('root')
);


