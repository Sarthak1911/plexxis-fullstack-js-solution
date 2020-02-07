import React from "react";
import { Link } from "react-router-dom";

//Local modules
import "./Card.css";

const Card = ({ id, name, onDelete }) => {
  return (
    <div className="card w-100 shadow-sm m-2">
      <div className="d-flex flex-row justify-content-between align-items-center card-body">
        <div className="h3 text-dark">
          <Link to={`/${id}`} className="text-capitalize to-new">
            {name}
          </Link>
        </div>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
