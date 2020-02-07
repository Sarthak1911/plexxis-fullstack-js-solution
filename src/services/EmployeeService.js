import axios from "axios";

class EmployeeService {
  async getEmployees() {
    return await axios.get("http://localhost:8080/api/employees");
  }

  async deleteEmployee(id) {
    await axios.delete(`http://localhost:8080/api/employees/delete/${id}`);
  }

  async getEmployee(id) {
    return await axios.get(`http://localhost:8080/api/employees/${id}`);
  }

  async updateEmployee(id, updatedEmployee) {
    await axios.post(
      `http://localhost:8080/api/employees/update/${id}`,
      updatedEmployee
    );
  }

  async createEmployee(employee) {
    await axios.post("http://localhost:8080/api/employees/create", employee);
  }
}

export default EmployeeService;
