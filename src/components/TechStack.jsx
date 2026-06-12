import "../styles/TechStack.css";

import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import nodejs from "../assets/icons/nodejs.svg";
import express from "../assets/icons/express.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import scss from "../assets/icons/scss.svg";
import php from "../assets/icons/php.svg";
import symfony from "../assets/icons/symfony.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import tailwind from "../assets/icons/tailwind.svg";
import figma from "../assets/icons/figma.svg";
import penpot from "../assets/icons/penpot.svg";
import mysql from "../assets/icons/mysql.svg";
import postgresql from "../assets/icons/postgresql.svg";
import sqlite from "../assets/icons/sqlite.svg";
import phpmyadmin from "../assets/icons/phpmyadmin.svg";
import postman from "../assets/icons/postman.svg";

const logos = [
    html,
    css,
    javascript,
    react,
    nodejs,
    express,
    bootstrap,
    scss,
    php,
    symfony,
    git,
    github,
    tailwind,
    figma,
    penpot,
    mysql,
    postgresql,
    sqlite,
    phpmyadmin,
    postman,
];

function TechBanner() {
    return (
        <>
            <div className="banner-title">
                <h2>Les technologies que j'utilise ?</h2>
            </div>
            <section className="banner">

                <div className="banner-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt="tech logo" />
                    ))}
                </div>
            </section>

            <div className="about" id="about">
                <h3> → En formation</h3>
                <p>
                    Au cours de ma formation Développeur Web et Web Mobile, j'ai acquis des compétences aussi bien en conception qu'en développement.
<br></br><br></br>
J'ai notamment travaillé sur le maquettage d'interfaces avec Figma, le développement front-end avec HTML, CSS et JavaScript, ainsi que le développement back-end avec PHP et Symfony. J'ai également eu l'occasion de découvrir Vue.js et de réaliser plusieurs projets mettant en pratique ces différentes technologies.
<br></br><br></br>
Au-delà des aspects techniques, cette formation m'a permis de comprendre les différentes étapes de réalisation d'un projet web, de la rédaction du cahier des charges jusqu'à sa mise en production. J'ai également été initiée aux méthodes Agiles et au framework SCRUM, en travaillant en équipe au travers de sprints hebdomadaires.
</p>
<h3> → En stage </h3>
<p>
  Lors de mon stage, j'ai participé au développement de deux projets réalisés pour des clients réels, en collaboration avec mon maître de stage et les autres stagiaires. Cette expérience m'a permis de mettre en pratique les compétences acquises durant ma formation et de découvrir le fonctionnement d'un projet en conditions professionnelles.
<br></br><br></br>
J'ai contribué à la conception des interfaces avec Penpot, puis au développement des applications avec React pour le front-end et Node.js avec Express.js pour le back-end. J'ai également utilisé Git et GitHub pour le versionnement et le travail collaboratif.
<br></br><br></br>
Au-delà des compétences techniques, cette expérience a renforcé mon autonomie, ma capacité d'adaptation et mon aptitude à travailler en équipe. Elle m'a également permis d'échanger directement avec les clients et de mieux comprendre les enjeux liés à la conception et au développement de solutions répondant à leurs besoins.
</p>
            </div>
        </>
    );
}

export default TechBanner;