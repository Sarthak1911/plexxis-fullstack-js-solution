import React from "react";
import Card from "./../Card/Card";
const Cards = ({ data, onDelete }) => {
  const renderCards = () => {
    if (data.length <= 0)
      return (
        <div className="d-flex justify-content-center align-items-center w-100">
          <span className="h3 text-dark">
            No employees on the list, press add to get add a new one!
          </span>
        </div>
      );

    return data.map(employee => (
      <Card employee={employee} onDelete={onDelete} key={employee.id} />
    ));
  };

  return <div className="row">{renderCards()}</div>;
};

export default Cards;
