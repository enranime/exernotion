import logo from './logo.svg';
import './App.css';

import AddActivity from './Page/AddActivity';
import ActivityHistory from './Page/ActivityHistory';
import Footer from "./Component/Footer/Footer"
import Navbar from "./Component/Navbar/Navbar"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
         <Routes>
           <Route path="exernotion/" element={<AddActivity/>} />
           <Route path="exernotion/activity-history" element={<ActivityHistory/>}/>
          </Routes>
        <Footer/>
       </BrowserRouter>
  );
}

export default App;
