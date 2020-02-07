import React from "react";
import { Link } from "react-router-dom";
import "./addButton.css";
const addButton = () => {
  return (
    <Link
      to="/new"
      className="bg-danger text-light floating-btn d-flex justify-content-center align-items-center shadow"
    >
      <span className="h4">+</span>
    </Link>
  );
};

export default addButton;
