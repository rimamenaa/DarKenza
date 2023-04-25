import './App.css'
import { Routes , Route} from "react-router-dom"
import Home from './Routes/Home'
import About from './Routes/About'
import Gallery from './Routes/Gallery'
import Contact from './Routes/Contact'

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/aboutUs" element={<About/>} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/contactUs" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
