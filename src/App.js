import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

import './App.css';


function App() {
  return (
    <Router>
      <h1>Movie List</h1>
      <Routes>
        <Route path = "/" element={<Screen1/>}/>
        <Route path = "/screen2" element={<Screen2/>}/>
      </Routes>
    </Router>
  );
}

export default App;