import React from "react";
const backButton = ({ onBackButtonPressed, path }) => {
  return (
    <button
      className="btn btn-link text-dark fixed-top back-button m-4"
      onClick={() => onBackButtonPressed(path)}
    >
      <i className="fa fa-2x fa-arrow-left" aria-hidden="true"></i>
    </button>
  );
};

export default backButton;
