import axios from "axios";
import { toast } from "react-toastify";

class EmployeeService {
  constructor() {
    this.endPoint = "http://localhost:8080/api/employees";
  }

  async getEmployees() {
    return await axios.get(this.endPoint);
  }

  async deleteEmployee(id) {
    await axios.delete(`${this.endPoint}/delete/${id}`);
  }

  async getEmployee(id) {
    return await axios.get(`${this.endPoint}/${id}`);
  }

  async updateEmployee(id, updatedEmployee) {
    try {
      await axios.put(`${this.endPoint}/update/${id}`, updatedEmployee);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  async createEmployee(employee) {
    try {
      await axios.post(`${this.endPoint}/create`, employee);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
}

export default EmployeeService;
