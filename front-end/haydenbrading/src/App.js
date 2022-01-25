import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/shop' element={ <Shop /> } />
      </Routes>
    </div>
  );
}

export default App;
