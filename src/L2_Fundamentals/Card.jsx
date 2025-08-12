import React from "react";

const Card = ({
  title,
  description,
  image,
  buttonText,
  buttonAction,
  color,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-${color}`}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ul className="card-text">
            {description &&
              description.map((elementText, index) => (
                <li key={index}>{elementText}</li>
              ))}
          </ul>
          {buttonText && buttonAction && (
            <button className={`btn btn-${color} w-100`} onClick={buttonAction}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
