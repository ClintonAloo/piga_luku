// import { Hero, Test} from "./Hero"
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { products } from "./db/db";

function App() {
  const [state, setState] = useState({
    all_products: [...products],
    filtered_products: [...products],
  });
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Navbar scroll={scroll} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home state={state} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
