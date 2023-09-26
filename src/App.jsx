// import { Hero, Test} from "./Hero"
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { products } from "./db/db";

function App() {
  const [state, setState] = useState({
    all_products: [...products],
    filtered_products: [...products],
    searchTerm: "",
    company: "all",
  });
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const setSearch = (e) => {
    setState({ ...state, searchTerm: e.target.value });
  };
  const setCompany = (company) => {
    setState({ ...state, company });
  };
  useEffect(() => {
    setState((prevState) => {
      const { all_products } = prevState;
      const newProducts = all_products.filter((product) =>
        product.name.toLowerCase().startsWith(prevState.searchTerm)
      );
      return { ...prevState, filtered_products: newProducts };
    });
  }, [state.searchTerm]);
  useEffect(() => {
    setState((prevState) => {
      const { all_products } = prevState;
      const newProducts = all_products.filter(
        (product) => product.company === prevState.company
      );
      if (prevState.company === "all") {
        return { ...prevState, filtered_products: prevState.all_products };
      }
      return { ...prevState, filtered_products: newProducts };
    });
  }, [state.company]);
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
        <Route
          path="/shop"
          element={
            <Products
              state={state}
              setSearch={setSearch}
              setCompany={setCompany}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
