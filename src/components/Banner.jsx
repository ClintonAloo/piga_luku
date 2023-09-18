import { Link } from "react-router-dom";



export default function Banner({ page }) {
    return <div className="banner">
        <div className="center-content">
        <Link to="/" className="banner__title banner__link">home / </Link>
        <span className="banner__title"> {page}</span>            
        </div>
    </div>
}