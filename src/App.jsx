import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =  useState(15);
  

   //let counter  = 15

   const addValue  = ()=>{
   // console.log("value added", Math.random());
   console.log("clicked",counter);
   counter = counter+1
  setCounter(counter);
   }

   const removeValue = ()=> {
    setCounter(counter-1);
   }

  return (
    <>
     <h1> new project and the name is counterc-02 </h1>
    <h2> Counter value :{ counter} </h2>

    <button 
    onClick={addValue}
    > Add a value</button>
    <br/> 
    <button
    onClick = {removeValue}> remove Value </button>
    <p> footer: { counter}</p>
    </>
  )
}

export default App
