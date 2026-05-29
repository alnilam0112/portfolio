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
        <section className="banner">
            <div className="banner-title">
                <h2>Les technologies que j'utilise ?</h2>
            </div>
            <div className="banner-track">
                {[...logos, ...logos].map((logo, index) => (
                    <img key={index} src={logo} alt="tech logo" />
                ))}
            </div>
            <div className="about" id="about">
                <p>Toujours prête à apprendre de nouvelles technologies et à relever de nouveaux défis dans le domaine du développement web.</p>
            </div>
        </section>
    );
}

export default TechBanner;