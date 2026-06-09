import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <Link to ="/">
                <img src={logo} alt="Logo soleil" className="logo" />
                </Link>
                <div className="line"></div>
            </div>

            <nav className="nav">
                 <HashLink smooth to="/#about">
                    Qui suis-je ?
                </HashLink>
                <Link to="/projects">Mes projets</Link>
                <HashLink smooth to="/#contact">
                    Contact
                </HashLink>
            </nav>
        </header>
    )
}

export default Header;