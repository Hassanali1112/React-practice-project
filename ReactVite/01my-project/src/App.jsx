import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  const colorArr = ['green', 'black','blue','white','red','grey','yellow','orange'];


  return (
    <div className='color-container' style={{backgroundColor : `${color}`}}> 
    <div className='mini-container'>
      <div>
      <button onClick={()=> setColor(colorArr[0])} style={{backgroundColor : "green"}}>Green</button>
      </div>
    <div> 
      <button onClick={()=> setColor(colorArr[1])} style={{backgroundColor : "black"}}>black</button>
      </div>
    <div>
      <button onClick={()=> setColor(colorArr[2])} style={{backgroundColor : "blue"}}>blue</button>
      </div>
    <div>
      <button onClick={()=> setColor(colorArr[3])} style={{backgroundColor : "white"}}>White</button>
      </div>
    <div>
      <button onClick={()=> setColor(colorArr[4])} style={{backgroundColor : "red"}}>Red</button>
      </div>
    <div>
      <button onClick={()=> setColor(colorArr[5])} style={{backgroundColor : "grey"}}>grey</button>
      </div>
    <div>
      <button onClick={()=> setColor(colorArr[6])} style={{backgroundColor : "yellow"}}>yellow</button>
      </div>
      <div>
      <button onClick={()=> setColor(colorArr[7])} style={{backgroundColor : "orange"}}>Orange</button>
      </div>
      </div>
    </div>
  )
}

export default App
