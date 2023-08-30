// import { Hero, Test} from "./Hero"
import {useState, useEffect} from "react"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
    setScroll(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <BrowserRouter>
    <Navbar scroll={scroll}/>
    <Routes>
      <Route path="/about" element={<h1>about</h1>} /><Route path="/" element={<Home />} /></Routes> 
      <Footer />
      </BrowserRouter>
  )
}

export default App
