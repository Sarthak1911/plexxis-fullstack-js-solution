import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Local modules
import Container from "./components/Container/Container";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import NotFound from "./components/not-found/NotFound";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Switch>
          <Route
            path="/employee/:id"
            exact
            render={props => <EmployeeForm {...props} />}
          />
          <Route path="/not-found" render={props => <NotFound {...props} />} />
          <Route path="/" exact render={props => <Container {...props} />} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
