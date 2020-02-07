import React, { Component } from "react";
import { Link } from "react-router-dom";

//Local modules
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  toggleDetails = () => {
    let { showDetails } = this.state;

    showDetails = !showDetails;

    this.setState({ showDetails });
  };

  render() {
    const { employee, onDelete } = this.props;
    const { showDetails } = this.state;
    return (
      <div className="card w-100 shadow-sm m-2 bg-light">
        <div className="d-flex flex-row justify-content-between align-items-center card-body">
          <div>
            <Link to={`/${employee.id}`} className="text-capitalize to-new h3">
              {employee.name}
            </Link>
            <br />
            {!showDetails && (
              <button
                className="btn btn-link m-0 p-0"
                onClick={this.toggleDetails}
              >
                Show more...
              </button>
            )}
          </div>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(employee.id)}
          >
            Delete
          </button>
        </div>
        <div
          className={
            "card-footer bg-white " +
            (showDetails ? "show-details" : "hide-details")
          }
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">#{employee.id}</li>
            <li className="list-group-item">Code: {employee.code}</li>
            <li className="list-group-item">
              Profession: {employee.profession}
            </li>
            <li className="list-group-item">Color: {employee.color}</li>
            <li className="list-group-item">City: {employee.city}</li>
            <li className="list-group-item">Branch: {employee.branch}</li>
          </ul>
          <div className="d-flex justify-content-end mt-3">
            <br />
            <button
              className="btn btn-link m-0 p-0"
              onClick={this.toggleDetails}
            >
              Show less..
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
