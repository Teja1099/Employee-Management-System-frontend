import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect, useRef } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import axios from "axios";
import { useHistory } from "react-router";

export default function InterviewAnalysisByMonth(props) {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(true);
  const month = props.match.params.month;
  const INTERVIEWANALYSIS_API_BASE_URL = `http://localhost:8080/api/v1/interviews/bar/${month}/2019`;

  const [names, setNames] = useState([]);
  const [time, setTime] = useState([]);
  const [days, setDays] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: INTERVIEWANALYSIS_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER_KEY")}`,
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
    history.push("/interview-tracker");
  };
  return (
    <>
      {/* {console.log(time)} */}
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* {console.log(props)} */}
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {month} Analysis
          </Modal.Title>
          <button
            className="btn btn-close bg-primary "
            onClick={() => handleClose()}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Bar data={dataBar} width={5} height={5} />
          {/* <HorizontalBar data={dataBar} /> */}
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
