// import { Hero, Test} from "./Hero"
import {useState, useEffect} from "react"
import Hero from "./components/Hero"
import About from "./components/About"

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
    <div>
      <Hero scroll={scroll}/>
      <About />
    </div>
  )
}

export default App
