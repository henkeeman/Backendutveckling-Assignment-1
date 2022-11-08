import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js';
import Navbar from './components/Navbar.js';
import ErrandsPage from './components/ErrandsPage.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/Errands' element={ <ErrandsPage /> }/>
      </Routes>
      
    </div>
  );
}

export default App;
