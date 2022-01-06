import React, {useEffect} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { laodContries} from './features/countrySlice'
import { NavBar } from './components/navBar/navbar.component';
import { HomePage } from './components/homePage/homePage.component';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {CountryPage} from './components/contryPage/countryPage.component'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(laodContries());    
  },[dispatch])

  return (
    <Router>  
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/:name' element={<CountryPage/> }/>
      </Routes>
    </Router>
    
  )
}

export default App;
