import "./EmployeeList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faUserPlus,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import EmployeeModal from "../components/EmployeeModal";
import { useHistory } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import UpdateEmployee from "../components/UpdateEmployee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../components/context/auth-context";

function EmployeeList(props) {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const addEmployee = () => {
    history.push("/sign-up");
  };

  const handleDelete = (id) => {
    const EMPLOYEE_DELETE_API_BASE_URL =
      "http://localhost:8080/api/v1/employees";

    axios({
      method: "DELETE",
      url: EMPLOYEE_DELETE_API_BASE_URL + "/" + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER_KEY")}`,
      },
    });

    props.changeAction(id);
  };

  const handleUpdate = (id) => {
    history.push("/UpdateEmployee/" + id);
  };

  return (
    <div>
      <button
        className="btn btn-warning ml-5 "
        onClick={() => {
          history.push("/leave-analysis");
        }}
      >
        <span className="m-2">Leave Analysis</span>
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <button
        className="btn btn-warning ml-5 "
        onClick={() => {
          history.push("/interview-analysis");
        }}
      >
        <span className="m-2">Interview Analysis</span>
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <div className="row m-2">
        <button className="btn btn-primary col-2 " onClick={addEmployee}>
          <FontAwesomeIcon icon={faUserPlus} /> Employee
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-responsive">
            <tr>
              <th>Id</th>
              <th>Name</th>
              {authCtx.isAdmin && (
                <th>
                  <span className="offset-2">Actions</span>
                </th>
              )}
              <th>
                <span className="offset-2">Awards</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => {
              const path = `https://communities.pkglobal.com/profile?id=E1IN0${employee.empId}`;
              return (
                <tr key={employee.id}>
                  <td className="col-3">
                    <a href={path} target="_blank">
                      {employee.empId}
                    </a>
                  </td>
                  <td className="col-3">
                    <EmployeeModal {...employee} />
                  </td>
                  {authCtx.isAdmin && (
                    <>
                      <td className="">
                        <button
                          className="offset-2 btn btn-warning ml-5 "
                          onClick={() => {
                            handleUpdate(employee.empId);
                          }}
                        >
                          {/* Update */}
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          className="btn btn-danger offset-1"
                          onClick={() => {
                            handleDelete(employee.empId);
                          }}
                        >
                          {/* Delete */}
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </>
                  )}
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
