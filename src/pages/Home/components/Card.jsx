import React from "react";

const Card = ({
    title,
    picture,
    description,
    link,
    linkDescription,
    link2,
    linkDescription2,
}) => {
    return(
        <div>
       <div className="card">
        {picture ? (
            <img className="card-image" src={picture} alt="project pic" />
        ) : null}
            <h5 className="card-title">{title}</h5>
            <p className="card-description">{description}</p>
            <div className="card-link-container">
            {link ? (<a
                href={link}
                rel={"noreferrer"}
                target={"_blank"}
                className="card-link button-hover"
            >
                {linkDescription}
            </a>
            ) : null}
            {link2 ? (
                <a
                href={link2}
                rel={"noreferrer"}
                target={"_blank"}
                className="card-link button-hover"
            >
                {linkDescription2}
            </a>
            ) : null}
        </div>
        </div> 
    </div>
    );
}
export default Card
