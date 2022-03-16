import React, { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {
  const [ count, setCount ] = useState(0)
  // const timer = React.createRef();
  const timer = useRef()
  console.log(timer);
  // useEffect(() => {
  //   console.log('-------');
  //   // setCount( count + 1)
  // },[])
  useEffect(() => {
    // console.log(timer);
    timer.current = setInterval(() => {
      // setCount( count + 1)
      setCount(count => count + 1)
    },1000)
    console.log(timer.current);
  },[])
  useEffect(() => {
    if(count >= 5) {
      clearInterval(timer.current)
    }
  },[count])
  // const addCount = () => {
  //   setCount( count + 1)
  // } 
  return (
    <>
      {count}
      {/* <p ref={timer}></p>
      <button onClick={addCount}>+1</button> */}
    </>
  )
}

export default App
