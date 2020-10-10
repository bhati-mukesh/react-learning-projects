import React, { useState, useEffect } from 'react';
import Shades from './components/Shades'
import ShadesInput from './components/ShadesInput'
import randomColor from 'randomcolor'

function App() {
  const [color,setColor] = useState(randomColor());

  // useEffect(()=>{
  //   setColor(randomColor())
  // },[])

  const onInputChange = (value)=>{
    setColor(value)
  }
  return (
          <div className="App">
          <ShadesInput color={color} onInputChange={onInputChange} />
          <Shades color={color} />
          </div>
  );
}

export default App;
