import React from "react";

const ObjectCard = ({ data }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/600" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ObjectCard;
