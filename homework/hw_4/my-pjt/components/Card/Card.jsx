import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Card = ({ key, url, title }) => {
  return (
    <div className="card">
      <img key={key} src={url} className="card-img-top" alt="Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};
