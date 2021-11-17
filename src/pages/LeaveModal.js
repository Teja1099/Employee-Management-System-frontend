import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import axios from "axios";
import AuthContext from "../components/context/auth-context";
import { useContext } from "react";

export default function LeaveModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const authCtx = useContext(AuthContext);

  const validate = Yup.object({
    empId: Yup.number().required("Required"),
    name: Yup.string()
      .min(5, "Must be 5 characters or less")
      .required("Required"),

    pkEmail: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
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
            Add Leave
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
              pkEmail: "",
              name: "",
              projectCode: "",
              date: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              const temp = {
                name: values.name,
                empId: values.empId,
                pkEmail: values.pkEmail,

                projectCode: values.projectCode,
                date: values.date,
              };
              console.log(temp);
              axios({
                method: "POST",
                url: "http://localhost:8080/api/v1/leave",
                data: temp,
                headers: {
                  Authorization: `Bearer ${authCtx.token}`,
                },
              }).catch((err) => {
                console.error(err);
              });
            }}
          >
            {(formik) => (
              <div className="mb-5">
                <Form>
                  <TextField label="Employee Id" name="empId" type="text" />
                  <TextField label="Pk Email" name="pkEmail" type="email" />
                  <TextField label="Name" name="name" type="text" />

                  <TextField
                    label="Project Code"
                    name="projectCode"
                    type="text"
                  />
                  {/* <TextField label="Month" name="month" type="text" /> */}
                  <TextField label="Date" name="date" type="date" />
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
        <FontAwesomeIcon icon={faPlusCircle} /> Leave
      </button>
    </>
  );
}
