import React from "react";

function InfoContent({ title, text, type }) {
  return (
    <div className={`info-content ${type}`}>
      <h2 className="animation">{title}</h2>
      <p className="animation">{text}</p>
    </div>
  );
}

export default InfoContent;
