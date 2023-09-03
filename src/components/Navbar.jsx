import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar({ scroll }) {
  return (
    <nav className={scroll ? "nav nav--sticky" : "nav"}>
      <div className="center-content nav-center">
        <div className="header">
          {/* <img src={logo} alt="piga luku" className="logo__img" /> */}
          <h3 className="logo">piga luku</h3>
        </div>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/">home</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">about</Link>
          </li>
          <li className="nav__link">
            <Link to="/shop">shop</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
