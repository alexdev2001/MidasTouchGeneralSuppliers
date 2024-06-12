import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './navbar'
import Landing from './main_components/landing'
import About from './main_components/about'
import Footer from './main_components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar/>
      
        <div>
        <Routes>
          <Route exact path="/random" element={<Landing/>}/>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Landing/>} />
          <Route path="/contact" element={<Landing/>} />
        </Routes>
       </div>
       <Footer/>
    </Router>
    

    </>
  )
}

export default App
