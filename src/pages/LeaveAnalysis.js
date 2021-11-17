import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";
import axios from "axios";
import { useHistory } from "react-router";

export default function LeaveAnalysis(props) {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(true);

  const LEAVEANALYSIS_API_BASE_URL = "http://localhost:8080/api/v1/leaves/bar";

  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: LEAVEANALYSIS_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER_KEY")}`,
      },
    })
      .then((res) => {
        setKeys(Object.keys(res.data));
        setValues(Object.values(res.data));
        console.log(Object.keys(res.data));
        console.log(keys);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const dataBar = {
    labels: keys,
    datasets: [
      {
        label: "No.of Leaves",
        backgroundColor: "#EC932F",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: values,
      },
    ],
  };

  const handleClose = () => {
    history.push("/leave-tracker");
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
            Leave Analysis
          </Modal.Title>
          <button
            className="btn btn-close bg-primary "
            onClick={() => handleClose()}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="conatiner">
            <Bar data={dataBar} width={5} height={5} />
          </div>
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
