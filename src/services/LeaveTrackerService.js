import axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import LeaveTracker from "../pages/LeaveTracker";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import LeaveModal from "../pages/LeaveModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../components/context/auth-context";
import { useContext } from "react";

export default function LeaveTrackerService() {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [leaves, setLeaves] = useState([]);
  const [month, setMonth] = useState("August");
  const [year, setYear] = useState("2021");
  let refContainer = useRef(month);
  const LEAVE_API_BASE_URL = "http://localhost:8080/api/v1/leaves";

  const getData = () => {
    try {
      axios({
        method: "GET",
        url: `${LEAVE_API_BASE_URL}/${refContainer}`,
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      }).then((res) => {
        setLeaves(res.data);

        console.log(res.data);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleYear = (eventKey) => {
    setYear(eventKey);
    getData();
    console.log(eventKey);
  };

  const handleMonth = (eventKey) => {
    console.log(month);
    refContainer = eventKey;
    setMonth(eventKey);
    console.log(month);

    getData();
  };

  useEffect(() => {
    refContainer = "August";
    getData();
  }, []);

  return (
    <div>
      <button
        className="btn btn-warning ml-5 "
        onClick={() => {
          history.push(`/leave-analysis/${month}/${year}`);
        }}
      >
        <span className="m-2">Analysis</span>
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <div className="row">
        <div className="col-2 p-3">
          <LeaveModal />
        </div>

        <div className="offset-6 col-2 p-3">
          <DropdownButton
            alignRight
            title={month}
            id="dropdown-menu-align-right"
            onSelect={(e) => {
              handleMonth(e);
            }}
          >
            {/* <Dropdown.Item eventKey="January">January</Dropdown.Item>
            <Dropdown.Item eventKey="February">February</Dropdown.Item>
            <Dropdown.Item eventKey="March">March</Dropdown.Item>
            <Dropdown.Item eventKey="April">April</Dropdown.Item>
            <Dropdown.Item eventKey="May">May</Dropdown.Item>
            <Dropdown.Item eventKey="June">June</Dropdown.Item>
            <Dropdown.Item eventKey="July">July</Dropdown.Item> */}
            <Dropdown.Item eventKey="August">August</Dropdown.Item>
            <Dropdown.Item eventKey="September">September</Dropdown.Item>
            <Dropdown.Item eventKey="October">October</Dropdown.Item>
            {/* <Dropdown.Item eventKey="November">November</Dropdown.Item>
            <Dropdown.Item eventKey="December">December</Dropdown.Item> */}
          </DropdownButton>
        </div>

        <div className="col-1 ml-5 p-3">
          <DropdownButton
            alignRight
            title={year}
            id="dropdown-menu-align-right"
            onSelect={handleYear}
          >
            <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
            <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
            <Dropdown.Item eventKey="2023">2022</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      {leaves.map((leave) => {
        const myArr = leave[1].split("<br/>");
        const days = myArr[1].split(" ");
        return (
          <div className="m-2" key={leave[0]}>
            <LeaveTracker name={leave[0]} days={days[3]} summary={myArr} />
          </div>
        );
      })}
    </div>
  );
}
