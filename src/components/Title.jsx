import { useEffect, useState } from "react";
import profileImage from "../assets/images/pp1.png";
import "../styles/Title.css";

// Constantes en dehors du composant : créées une seule fois, pas à chaque rendu
const FULL_TEXT =
    "Hello, je suis Axelle Castandet,\nDéveloppeuse FullStack.\n\nBienvenue sur mon portfolio !";
const TYPING_SPEED = 50; // délai entre deux lettres, en millisecondes

// Variable "de module" : reste à true tant que le site n'est pas rechargé.
// Ainsi l'animation ne se joue qu'à l'ouverture du site, pas à chaque retour sur l'accueil.
let hasPlayed = false;

function Title() {
    // Nombre de lettres déjà affichées. Un seul état suffit : le texte visible s'en déduit.
    // Si l'animation a déjà été jouée, ou si l'utilisateur a désactivé les animations
    // dans son système, on affiche directement tout le texte.
    const [count, setCount] = useState(() =>
        hasPlayed || window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? FULL_TEXT.length
            : 0
    );

    useEffect(() => {
        // Texte complet : on le mémorise et on n'arme plus de minuteur
        if (count >= FULL_TEXT.length) {
            hasPlayed = true;
            return;
        }

        // Ajoute une lettre après le délai, ce qui relance l'effet jusqu'à la fin
        const timer = setTimeout(() => setCount((current) => current + 1), TYPING_SPEED);

        // Nettoyage : annule le minuteur si le composant disparaît
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <section className="title">
            <p className="title__text">
                {/* Version complète pour les lecteurs d'écran (invisible à l'écran) */}
                <span className="title__sr-only">{FULL_TEXT}</span>

                {/* Version animée, ignorée par les lecteurs d'écran */}
                <span aria-hidden="true">
                    {FULL_TEXT.slice(0, count)}
                    {/* Lettres pas encore tapées : invisibles mais déjà présentes,
                        pour que le texte et l'image ne bougent pas pendant l'animation */}
                    <span className="title__rest">{FULL_TEXT.slice(count)}</span>
                </span>
            </p>

            <img
                src={profileImage}
                alt="Portrait en pixel art d'Axelle Castandet"
                className="title__image"
            />
        </section>
    );
}

export default Title;