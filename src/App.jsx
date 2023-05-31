import { useState } from 'react'
import { addNum } from './service'
import './App.css'

function App() {

  // const ValA = document.getElementById("num1").value
  // const ValB = document.getElementById("num2").value

  async function handleClick(){
    const value = await addNum(3, 4);
    console.log(value);
  }

  return (
    <>
    <input type='text' placeholder='Number 1' id="valOne" /> 
    <input type='text' placeholder='Number 2' id="valTwo" /> 
    <button onClick={handleClick} > + </button>
    <p style={{ height:"2em", width:"50%", border:"2px solid black"}}></p>
    </>
  )
}

export default App
