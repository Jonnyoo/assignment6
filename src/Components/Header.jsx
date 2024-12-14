import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <div className="header">
            <h1 className="header-title"><Link to={`/`} className="header-title">MANGOFLIX</Link></h1>
            <div className="nav-links">
                <a className="nav-link"><Link to={`/`} className="nav-link">Home</Link></a>
                <a href="#featured-movies" className="nav-link">Featured</a>
                <a href="#popular-shows" className="nav-link">Shows</a>
                <a href="#popular-movies" className="nav-link">Movies</a>
            </div>
            <div className="button-container">
                <button className="buttons" type="button" ><Link to={`/login`} className="button">Login</Link></button>
                <button className="buttons" type="button" ><Link to={`/register`} className="button">Register</Link></button>
            </div>
        </div>
    )
}

export default Header