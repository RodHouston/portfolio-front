
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import AddProfile from './components/AddProfile';
import ListProfile from './components/ListProfile';
import Marvel from './Pages/Marvel'
import React from 'react';
import Home from './Pages/Home';


function App() {


  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route  path="/marvel" element={<Marvel />} />
      </Routes>
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
