import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "../Card/Card";

export const Gallery = ({ content }) => {
  return (
    <section className="py-5 text-center container">
      <div className="row row-cols-1 row-cols-1-sm-2 row-cols-md-3 g-3">
        {content.map((el, i) => (
          <Card url={el.url} key={i} title={el.title}></Card>
        ))}
      </div>
    </section>
  );
};
