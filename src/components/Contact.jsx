import "../styles/Contact.css";

import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-title">
                <h2>Contactez-moi !</h2>
            </div>

            <div className="contact-info">
                <a
                    href="mailto:axell.castandet@gmail.com"
                    aria-label="Envoyer un email"
                >
                    <FiMail />
                </a>

                <a
                    href="https://github.com/alnilam0112"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir mon GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/axelle-castandet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir mon LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="tel:+33611804030"
                    aria-label="M'appeler"
                >
                    <FiPhone />
                </a>
            </div>
        </section>
    );
}

export default Contact;