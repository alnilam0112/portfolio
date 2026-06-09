import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, video, description }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="project-card">
            <h2>{title}</h2>

            <video controls className="project-video">
                <source src={video} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos.
            </video>

            <p>
                {showMore
                    ? description
                    : description.slice(0, 100) + "... "}
                <span
                    className="read-more"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Voir moins" : "Lire la suite"}
                </span>
            </p>
        </div>
    );
}

export default ProjectCard;