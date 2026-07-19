import React from 'react'
import { useEffect,useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {

    console.log("activated");
      document.title = `you clicked (${count})`;
  },[count])
  return (
    <div>
      {/* <h1>side effects</h1>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count + 1)}>increase</button> */}

      <input onchange={()=>set1} type="text" placeholder='enter name' />
      <button>submit</button>
    </div>
  )
}

export default App