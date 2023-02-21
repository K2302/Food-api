import React from 'react'
import './App.css'
import Details from './Compo/Details.jsx'
import Navbar from './Compo/Navbar';
import Food from './Compo/Food.jsx'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Details></Details>
      <Food></Food>
    </div>
  )
}

export default App


