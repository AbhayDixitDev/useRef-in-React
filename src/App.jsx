import { useRef } from "react";

const App=()=>{
  const colorRef = useRef(null)

  const handleColor=()=>{  
     colorRef.current.style.backgroundColor="red"
  }
  
  return(
    <>
    <button ref={colorRef}>Click me</button>
    <button onClick={handleColor}>I will change color of click me</button>

    </>
  )
}

export default App;