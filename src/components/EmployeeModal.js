import Modal from "react-bootstrap/Modal";
import "./EmployeeModal.module.css";
import React, { useState } from "react";

export default function EmployeeModal(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Details</Modal.Title>
          <button
            className="btn btn-close bg-primary "
            onClick={() => setModalShow(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <h6> Name</h6>
          <p>{props.name}</p>
          <h6>Employee Id</h6>
          <p>{props.empId}</p>
          <h6>PK Email</h6>
          <p>{props.pkEmail}</p>
          <h6>Status</h6>
          <p>{props.status}</p>
          <h6>Nike Id</h6>
          <p>{props.nikeId}</p>
          <h6>Nike Email</h6>
          <p>{props.nikeEmail}</p>
          <h6>DOB</h6>
          <p>{props.dob}</p>
          <h6>Joining Date</h6>
          <p>{props.joiningDate}</p>
          <h6>Contact</h6>
          <p>{props.contact}</p>
          <h6>Base Location</h6>
          <p>{props.baseLocation}</p>
          <h6>Role</h6>
          <p>{props.role}</p>
          <h6>Project</h6>
          <p>{props.project}</p>
          <h6>Project Code</h6>
          <p>{props.projectCode}</p>
          <h6> Designation</h6>
          <p>{props.designation}</p>
          <h5>Emergency Contact Details:</h5>
          <card className="card m-2">
            <div className="offset-1 mt-2">
              <h6>Name</h6>
              <p>{props.emergencyContact.name}</p>
              <h6> Contact</h6>
              <p>{props.emergencyContact.contact}</p>
            </div>
          </card>
          <h6 className="mt-3">Has H1</h6>
          <p>{props.hasH1}</p>
          <h6>Experience (IT)</h6>
          <p>{props.totalExperienceInIT}</p>
          <h6>Experience (Pk)</h6>
          <p>{props.totalExperienceInPK}</p>
          <h6>Experience (NIKE)</h6>
          <p>{props.totalExperienceInNIKE}</p>
          <h5>Skills</h5>
          <card className="card m-2">
            <div className="offset-1 mt-2">
              <h6>Primary Skills</h6>
              <p>{props.primarySkills}</p>
              <h6>Sceondary Skills</h6>
              <p>{props.sceondarySkills}</p>
            </div>
          </card>
          {props.address && (
            <>
              <h6>Address</h6>
              <p>{props.address}</p>
            </>
          )}
          {props.certification && (
            <>
              <h6>Certification</h6>
              <p>{props.certification}</p>
            </>
          )}
          {props.status2 && (
            <>
              <h6>Status</h6>
              <p>{props.status2}</p>
            </>
          )}
          {props.Comments && (
            <>
              <h6>Comments</h6>
              <p>{props.comments}</p>
            </>
          )}
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
      <button className="btn bg-primary" onClick={() => setModalShow(true)}>
        {props.name}
      </button>
    </>
  );
}
