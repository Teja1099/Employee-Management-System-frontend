import axios from "axios";
import { Signup as SignUp } from "../pages/SignUp";
import React, { useEffect, useState } from "react";
import AuthContext from "../components/context/auth-context";
import { useContext } from "react";

export default function SignUpService() {
  const [employee, setEmployee] = useState([]);
  const authCtx = useContext(AuthContext);

  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";

  const sendDataToParent = (index) => {
    // the callback
    console.log(index);
    setEmployee(index);
  };

  useEffect(() => {
    postEmployee();
  }, [sendDataToParent]);

  const postEmployee = () => {
    axios({
      method: "POST",
      url: EMPLOYEE_API_BASE_URL,
      data: employee,
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    }).then((res) => {});
  };

  return (
    <div>
      <SignUp sendDataToParent={sendDataToParent} />
    </div>
  );
}
