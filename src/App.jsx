import './App.css'
import Navbar from './Components/Navbar'
// import { Routes } from "react-router-dom"
import Home from './Routes/Home'

function App() {
  return (
    <>
      {/* <Routes> */}
      <Navbar/>        
      {/* </Routes> */}
      <Home/>
    </>
  )
}

export default App
