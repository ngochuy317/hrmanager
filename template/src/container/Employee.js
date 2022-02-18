import { connect } from "react-redux";
import { fetchEmployees } from "../redux/actions/employee";
import EmployeePage from "../pages/EmployeePage";

const mapStateToProps = (state) => ({
  employees: state.employees.list,
});
const mapActionsToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
});

export default connect(mapStateToProps, mapActionsToProps)(EmployeePage);
