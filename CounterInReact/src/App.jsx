import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] = useState(17)
  //let counter = 17

  const addValue = () =>{
    console.log("Clicked", counter);
   setCounter(counter + 1)
  }

  const deleteValue = () =>{
      console.log("clicked",counter)
      setCounter(counter - 1)
    }

  return (
    <>
     <h1>TanzinTech</h1>
     <h2>Counter value : {counter}</h2>
     <button  
        onClick={addValue}>
        Add value
      </button>
     <br/>
     <button 
       onClick={deleteValue}>
        Delete value
        </button>
    </>
  )
}

export default App



