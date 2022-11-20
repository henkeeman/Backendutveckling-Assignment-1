import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js';
import Navbar from './components/Navbar.js';
import ErrandsPage from './components/ErrandsPage.js';
import RegisterPage from './components/RegisterPage.js';
import ErrandDetailsPage from './components/ErrandDetailsPage.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/Errands' element={ <ErrandsPage /> }/>
        <Route path='/Register' element={ <RegisterPage /> }/>
        <Route path="/Errands/:_id" element={<ErrandDetailsPage />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
