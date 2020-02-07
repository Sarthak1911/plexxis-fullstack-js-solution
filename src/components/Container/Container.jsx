import React, { Component } from "react";
import { toast } from "react-toastify";

//Local module
import EmployeeService from "./../../services/EmployeeService";
import Cards from "./../Cards/Cards";
import AddButton from "./../AddButton/addButton";
import Spinner from "./../Spinner/spinner";

class Container extends Component {
  state = {
    data: [],
    showSpinner: true
  };

  constructor(props) {
    super(props);
    //Initialize the http helper
    this.empService = new EmployeeService();
  }

  componentDidMount() {
    setTimeout(() => {
      this.refreshEmployees();
    }, 200);
  }

  handleDelete = async id => {
    try {
      await this.empService.deleteEmployee(id);
      this.refreshEmployees();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  handleEdit = async row => {
    console.log(row);
  };

  refreshEmployees = async () => {
    try {
      this.setState({ showSpinner: true });

      const { data } = await this.empService.getEmployees();

      this.setState({ data, showSpinner: false });
    } catch (error) {
      toast.error("Something went wrong");
      this.setState({ showSpinner: false });
    }
  };

  showContent = () => {
    const { showSpinner } = this.state;
    const { data } = this.state;

    return showSpinner ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="mt-2">
              <span className="h2">Employees</span>
            </div>
            <hr />
            <Cards data={data} onDelete={this.handleDelete} />
          </div>
          <AddButton />
        </div>
      </React.Fragment>
    );
  };

  render() {
    return this.showContent();
  }
}

export default Container;
