import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Description from './components/home/Description';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/description' element={<Description/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
