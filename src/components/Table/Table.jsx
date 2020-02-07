import React from "react";
import { Link } from "react-router-dom";

//Local modules
import "./Table.css";

function Table(props) {
  const { columns, data, onDelete } = props;

  function renderHeaders() {
    return columns.map(column => <th key={column}>{column}</th>);
  }

  function renderRow() {
    return data.map(employee => {
      const {
        id,
        name,
        code,
        profession,
        color,
        city,
        branch,
        assigned
      } = employee;

      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{code}</td>
          <td>{profession}</td>
          <td>{color}</td>
          <td>{city}</td>
          <td>{branch}</td>
          <td>{assigned.toString()}</td>
          <td>
            <Link to={`${id}`} className="btn btn-primary">
              Edit
            </Link>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => onDelete(id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {renderHeaders()}
          <th></th>
          <th>
            <Link to={"/new"} className="btn btn-success">
              New
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>{renderRow()}</tbody>
    </table>
  );
}

export default Table;
