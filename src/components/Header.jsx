import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/images/logoalnilam.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((open) => !open);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <Link to="/" className="header__logo-link" onClick={closeMenu}>
                <img src={logo} alt="Retour à l'accueil" className="header__logo" />
            </Link>

            <button
                type="button"
                className={`burger ${isOpen ? "burger--open" : ""}`}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                aria-controls="main-nav"
                onClick={toggleMenu}
            >
                <span />
                <span />
                <span />
            </button>

            <nav
                id="main-nav"
                className={`nav ${isOpen ? "nav--open" : ""}`}
                aria-label="Navigation principale"
                onClick={closeMenu}
            >
                <HashLink smooth to="/#about" data-text="Qui suis-je ?">
                    Qui suis-je ?
                </HashLink>
                <Link to="/projects" data-text="Mes projets">
                    Mes projets
                </Link>
                <HashLink smooth to="/#contact" data-text="Contact">
                    Contact
                </HashLink>
            </nav>
        </header>
    );
}

export default Header;