import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)  // hook  for UI updation


  // let counter = 15;

  const addCount = function(){
    // console.log(`addCount clicked ${counter} : ${Math.random()}`);
    // counter = counter + 1;
    if(counter <= 24)
      setCount(counter + 1);
  }
  const removeCount = ()=> {
      // console.log(`removeCount clicked ${counter} : ${Math.random()}`)
      if(counter >= 1)
      setCount(counter - 1);
  }
  return (
    <>
      <h1>React Counrter App : {counter}</h1>
<div id="container">
      <button class="btn" id="btn1" onClick={addCount}>add count : {counter}</button>

      <button class="btn" id="btn2" onClick={removeCount}>remove count : {counter}</button>
</div>
      

      <p>Counter value is : {counter}</p>
    </>
  )
}

export default App
