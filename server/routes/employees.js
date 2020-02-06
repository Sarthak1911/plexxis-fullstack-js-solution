const express = require("express");

const router = express.Router();

//Links to local modules
const EmployeesHelper = require("../database/employeesHelpers");
const empSchema = require("../validation/joi/employees");
const emp = new EmployeesHelper();

router.get("/", async (req, res) => {
  try {
    const response = await emp.getEmployees();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send("Something went wrong on the server!");
  }
});

router.post("/create", async (req, res) => {
  const { body: employee } = req;

  //Validate the request body
  const { error } = empSchema.validate(employee);

  if (error) return res.status(404).json(error);

  try {
    //Once validation is done
    //We only need the values of the employee object
    await emp.createEmployee(Object.values(employee));
    return res.status(200).send("EMPLOYEE CREATED!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong at the server");
  }
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  let { body: updatedEmployee } = req;

  try {
    //Find the user
    const user = await emp.getEmployee(req.params.id);

    //If the array returned is empty i.e. user not found
    if (user.length <= 0) res.status(404).send("User not found");

    //If the employee exists, add the employee id to the employee object
    updatedEmployee = [...Object.values(updatedEmployee), id];

    //Update the user
    await emp.updateEmployee(updatedEmployee);

    return res.status(200).json("EMPLOYEE UPDATED!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong at the server");
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    //Find the user
    const user = await emp.getEmployee(req.params.id);

    //If the array returned is empty i.e. user not found
    if (user.length <= 0) res.status(404).send("User not found");

    //If the employee exists, delete the employee

    await emp.deleteEmployee(id);

    return res.status(200).json("EMPLOYEE DELETED!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong at the server");
  }
});

module.exports = router;
