import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Local modules
import Container from "./components/Container/Container";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Switch>
          <Route path="/" exact render={props => <Container {...props} />} />
          <Route
            path="/:id"
            exact
            render={props => <EmployeeForm {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
