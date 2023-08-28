
import logo from "../assets/logo.png"

function Navbar({scroll}) {

    console.log(scroll);

    return <nav className={scroll ? "nav nav--sticky" : "nav"}>
        <div className="center-content nav-center">
            <div className="header">
                    {/* <img src={logo} alt="piga luku" className="logo__img" /> */}
                <h3 className="logo">
                    piga luku
                </h3>
            </div>
            <ul className="nav__links">
                <li className="nav__link">
                    <a href="#">home</a>
                </li>
                 <li className="nav__link">
                    <a href="#">about</a>
                </li>
                 <li className="nav__link">
                    <a href="#">shop</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar