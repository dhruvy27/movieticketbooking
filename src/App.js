import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import HomeScreen from './Components/HomeScreen/HomeScreen';
import HallScreen from './Components/CinemaHall/HallScreen';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomeScreen/>}/>
        <Route path = "/HallScreen" element={<HallScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;