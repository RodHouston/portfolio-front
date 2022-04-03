import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import AddProfile from './components/AddProfile';
import ListProfile from './components/ListProfile';
import Marvel from './Pages/Marvel'
import Home from './Pages/Home';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/marvel" element={<Marvel />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
