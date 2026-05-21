import "../styles/Header.css";
import logo from "../assets/images/logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo soleil" className="logo" />
                <div className="line"></div>
            </div>

            <nav className="nav">
                <a href="#about">Qui suis-je ?</a>
                <a href="#projects">Mes projets</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;