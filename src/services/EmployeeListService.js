import axios from "axios";
import EmployeeList from "../pages/EmployeeList";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../components/context/auth-context";
import { useContext } from "react";

export default function EmployeeListService() {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [employees, setEmployees] = useState([]);

  const EMPLOYEELIST_API_BASE_URL = "http://localhost:8080/api/v1/employees";

  let changeAction = (id) => {
    setEmployees(
      // props.employees.filter((employee) => employee.empId !== id);
      employees.filter((employee) => {
        return employee.empId !== id;
      })
    );
  };
  useEffect(() => {
    getAllEmployee();
  }, []);

  let getAllEmployee = () => {
    try {
      axios({
        method: "GET",
        url: EMPLOYEELIST_API_BASE_URL,
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      }).then((res) => {
        const allEmployee = res.data;

        setEmployees(allEmployee);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <EmployeeList employees={employees} changeAction={changeAction} />
    </div>
  );
}
