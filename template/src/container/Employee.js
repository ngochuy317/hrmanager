import { connect } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../redux/actions/employeeAct";
import EmployeePage from "../pages/employee/EmployeePage";

const mapStateToProps = (state) => ({
  employees: state.employees.list,
});
const mapActionsToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
  deleteEmployee: (id) => dispatch(deleteEmployee(id)),
});

export default connect(mapStateToProps, mapActionsToProps)(EmployeePage);
