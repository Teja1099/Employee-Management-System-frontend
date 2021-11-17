import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import AuthContext from "../components/context/auth-context";
import { useContext } from "react";
import axios from "axios";

export default function InterviewModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const authCtx = useContext(AuthContext);

  const validate = Yup.object({
    empId: Yup.number().required("Required"),
    name: Yup.string()
      .min(5, "Must be 5 characters or less")
      .required("Required"),
  });
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
            Add Interview
          </Modal.Title>
          <button
            className="btn btn-close bg-primary "
            onClick={() => setModalShow(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              empId: "",
              name: "",

              date: "",
              interviewType: "",
              round: "",
              technologyStack: "",
              candidateStatus: "",
              timeSpent: "",
              comments: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              const temp = {
                name: values.name,
                empId: values.empId,
                date: values.day,
                interviewType: values.interviewType,
                round: values.round,
                technologyStack: values.technologyStack,
                candidateStatus: values.candidateStatus,
                timeSpent: values.timeSpent,
                comments: values.comments,
              };

              axios({
                method: "POST",
                url: "http://localhost:8080/api/v1/interview",
                data: temp,
                headers: {
                  Authorization: `Bearer ${authCtx.token}`,
                },
              }).catch((err) => {
                console.error(err);
              });

              //   setEmployee(temp);
              //   sendDataToParent(temp);
              // console.log(employee);
            }}
          >
            {(formik) => (
              <div className="mb-5">
                <Form>
                  <TextField label="Employee Id" name="empId" type="text" />

                  <TextField label="Name" name="name" type="text" />
                  <TextField
                    label="Interview Type"
                    name="interviewType"
                    type="text"
                  />
                  <TextField label="Round" name="round" type="text" />
                  <TextField
                    label="Technology Stack"
                    name="technologyStack"
                    type="text"
                  />
                  {/* <TextField label="Month" name="month" type="text" /> */}
                  <TextField label="Date" name="day" type="date" />
                  <TextField label="Time Took" name="timeSpent" type="text" />
                  <TextField
                    label="Candidate Status"
                    name="candidateStatus"
                    type="text"
                  />
                  <TextField label="Comments" name="comments" type="text" />
                  <div className="row">
                    <button
                      className="col-3 offset-2 btn btn-dark mt-3"
                      type="submit"
                    >
                      Add
                    </button>
                    <button
                      className="col-3 offset-2 btn btn-danger mt-3 "
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
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
        <FontAwesomeIcon icon={faPlusCircle} /> Interview
      </button>
    </>
  );
}
