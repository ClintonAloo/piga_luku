import { Link } from "react-router-dom"

export default function Error() {
return <div className="error">
    <div className="center-content">
        <h2 className="error__title">404: page not found</h2>
        <Link to="/" className="btn btn--secondary btn--error">back home</Link>
    </div>
</div>

}