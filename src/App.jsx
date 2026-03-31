
import Navbar from "./navbar";
import Hero from "./hero";
import Status from "./status";
import Tools from "./tools";


// api call 

const getTools = async() => {
  const responce = await fetch("/tools.json")
  return responce.json()
}

const toolsPromise = getTools();



function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Status/>
      <Tools toolsPromise={toolsPromise}/>
    </>
  )
}

export default App
