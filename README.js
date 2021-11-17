import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function LeaveAnalysis(props) {
  const [modalShow, setModalShow] = useState(false);
  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#EC932F",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      // {
      //   label: "My First dataset 2",
      //   backgroundColor: "rgba(255,99,132,0.2)",
      //   borderColor: "rgba(255,99,132,1)",
      //   borderWidth: 1,
      //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //   hoverBorderColor: "rgba(255,99,132,1)",
      //   data: [65, 59, 80, 81, 56, 55, 40],
      // },
    ],
  };
  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* {console.log(props)} */}
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Leave
          </Modal.Title>
          <button
            className="btn btn-close bg-primary "
            onClick={() => setModalShow(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Bar data={dataBar} width={50} height={50} />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn bg-primary"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <button
        className="btn bg-primary text-white"
        onClick={() => setModalShow(true)}
      >
        <FontAwesomeIcon icon={faPlusCircle} /> Analysis
      </button>
    </>
  );
}
