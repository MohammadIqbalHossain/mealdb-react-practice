import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {

  // const [order, setOrder] = useState('');


  
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
      <Meals></Meals>
      </div>
       
    </div>
  );
}

export default App;
