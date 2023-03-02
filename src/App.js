import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Header from './component/Header';
import Nopage from './page/Nopage';
import Footer from './component/Footer';
import Login from './page/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
