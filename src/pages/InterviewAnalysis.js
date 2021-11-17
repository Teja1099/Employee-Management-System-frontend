import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect, useRef } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import axios from "axios";
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../components/context/auth-context";

export default function InterviewAnalysis(props) {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(true);

  const INTERVIEWANALYSIS_API_BASE_URL =
    "http://localhost:8080/api/v1/interviews/bar";

  const [names, setNames] = useState([]);
  const [time, setTime] = useState([]);
  const [days, setDays] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: INTERVIEWANALYSIS_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => {
        setNames(Object.keys(res.data));

        const arr = Object.values(res.data);

        let t = [];
        let d = [];
        arr.map((ar) => {
          const val = ar.split(",");

          t = [...t, val[0]];
          d = [...d, val[1]];
        });
        console.log(t);
        setTime(t);
        setDays(d);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const dataBar = {
    labels: names,
    datasets: [
      {
        label: "Time spent (Hrs)",
        backgroundColor: "#EC932F",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: time,
      },
      {
        label: "No.of Interviews",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: days,
      },
    ],
  };

  const handleClose = () => {
    history.push("/employees");
  };
  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Interview Analysis
          </Modal.Title>
          <button
            className="btn btn-close bg-primary "
            onClick={() => handleClose()}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Bar data={dataBar} width={5} height={5} />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn bg-primary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
