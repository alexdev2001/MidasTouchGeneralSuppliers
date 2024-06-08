import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './navbar'
import Landing from './main_components/landing'

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
          <Route path="/about" element={<Landing/>} />
          <Route path="/services" element={<Landing/>} />
          <Route path="/contact" element={<Landing/>} />
        </Routes>
       </div>
    </Router>
    </>
  )
}

export default App
