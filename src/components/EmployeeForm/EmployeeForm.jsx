import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

//Local modules
import EmployeeService from "./../../services/EmployeeService";
import Form from "./../Form/Form";

class EmployeeForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        branch: "",
        city: "",
        code: "",
        color: "",
        name: "",
        profession: "",
        assigned: false
      },
      errors: {}
    };
    this.empService = new EmployeeService();
  }

  async componentDidMount() {
    const { match, history } = this.props;

    if (match.params.id === "new") return;

    try {
      const { data } = await this.empService.getEmployee(match.params.id);

      if (data) this.setState({ data });
      else history.replace("/not-found");
    } catch (error) {
      history.replace("/not-found");
    }
  }

  schema = {
    branch: Joi.string()
      .required()
      .max(20)
      .label("Branch"),
    city: Joi.string()
      .required()
      .max(20)
      .label("City"),
    code: Joi.string()
      .required()
      .max(10)
      .label("Code"),
    color: Joi.string()
      .required()
      .max(10)
      .label("Color"),
    name: Joi.string()
      .required()
      .max(20)
      .label("Name"),
    profession: Joi.string()
      .required()
      .max(20)
      .label("Profession"),
    assigned: Joi.optional()
  };

  doSubmit = async () => {
    const { id } = this.props.match.params;
    const { data: employee } = this.state;

    try {
      let {
        name,
        code,
        profession,
        color,
        city,
        branch,
        assigned
      } = this.state.data;

      if (id === "new") {
        //Create a new employee
        const emp = {
          name,
          code,
          profession,
          color,
          city,
          branch,
          assigned
        };
        this.empService.createEmployee(emp);
        this.props.history.replace("/");
        return;
      } else {
        //Update existing employee
        delete employee.id;
        this.empService.updateEmployee(id, employee);
        this.props.history.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  getBtnValue = () => {
    const { id } = this.props.match.params;
    return id === "new" ? "Create" : "Update";
  };

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center form-container vh-100">
        <div className="col-8 card shadow p-4">
          <h2>Employee</h2>
          <hr />
          <form>
            {this.renderInput("name", "text", "Name")}
            {this.renderInput("code", "text", "Code")}
            {this.renderInput("profession", "text", "Profession")}
            {this.renderInput("color", "text", "Color")}
            {this.renderInput("city", "text", "City")}
            {this.renderInput("branch", "text", "Branch")}
            {this.renderCheckBox("assigned")}
            {this.renderSubmitButton(this.getBtnValue())}
          </form>
        </div>
      </div>
    );
  }
}

export default EmployeeForm;
