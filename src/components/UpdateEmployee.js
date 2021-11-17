import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { createBrowserHistory } from "history";
const UpdateEmployee = (props) => {
  const history = useHistory(); //createBrowserHistory({ forceRefresh: true });
  const [employee, setEmployee] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  const [name, setName] = useState([]);
  const [empId, setEmpId] = useState([]);
  const [pkEmail, setPkEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [status, setStatus] = useState([]);
  const [nikeId, setNikeId] = useState([]);
  const [nikeEmail, setNikeEmail] = useState([]);
  const [dob, setDOB] = useState([]);
  const [joiningDate, setJoiningDate] = useState([]);
  const [contact, setContact] = useState([]);
  const [baseLocation, setBaseLocation] = useState([]);
  const [role, setRole] = useState([]);
  const [project, setProject] = useState([]);
  const [projectCode, setProjectCode] = useState([]);
  const [designation, setDesignation] = useState([]);
  // const [ename, setEmergencyContactName] = useState([]);
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    contact: 12,
  });
  const [hasH1, setHasH1] = useState([]);
  const [totalExperienceInIT, setTotalExperienceInIT] = useState([]);
  const [totalExperienceInPK, setTotalExperienceInPK] = useState([]);
  const [totalExperienceInNIKE, setTotalExperienceInNIKE] = useState([]);
  const [primarySkills, setPrimarySkills] = useState([]);
  const [sceondarySkills, setSceondarySkills] = useState([]);
  const [address, setAddress] = useState([]);
  const [certification, setCertification] = useState([]);
  const [status2, setStatus2] = useState([]);
  const [comments, setComments] = useState([]);

  URL = "http://localhost:8080/api/v1/employee/";

  useEffect(() => {
    const id = props.match.params.id;
    axios({
      method: "GET",
      url: URL + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER_KEY")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setEmployee(res.data);
        setName(res.data.name);
        setEmpId(res.data.empId);
        setPkEmail(res.data.pkEmail);
        setPassword(res.data.password);
        setConfirmPassword(res.data.password);
        setStatus(res.data.status);
        setNikeId(res.data.nikeId);
        setNikeEmail(res.data.nikeEmail);
        setDOB(res.data.DOB);
        setJoiningDate(res.data.joiningDate);
        setContact(res.data.contact);
        setBaseLocation(res.data.baseLocation);
        setRole(res.data.role);
        setProject(res.data.project);
        setProjectCode(res.data.projectCode);
        setDesignation(res.data.designation);
        setHasH1(res.data.hasH1);
        setEmergencyContact(res.data.emergencyContact);
        // setEmergencyContact(res.data.emergencyContact.contact);
        setTotalExperienceInIT(res.data.totalExperienceInIT);
        setTotalExperienceInNIKE(res.data.totalExperienceInNIKE);
        setTotalExperienceInPK(res.data.totalExperienceInPK);
        setPrimarySkills(res.data.primarySkills);
        setSceondarySkills(res.data.sceondarySkills);
        setAddress(res.data.address);
        setCertification(res.data.certification);
        setStatus2(res.data.status2);
        setComments(res.data.comments);
      })
      .catch((err) => console.error(err));
  }, []);

  const updatedEmployee = {
    name,
    empId,
    pkEmail,
    password,
    status,
    nikeId,
    nikeEmail,
    dob,
    joiningDate,
    contact,
    baseLocation,
    role,
    project,
    projectCode,
    designation,
    emergencyContact,
    hasH1,
    totalExperienceInIT,
    totalExperienceInNIKE,
    totalExperienceInPK,
    primarySkills,
    sceondarySkills,
    address,
    certification,
    status2,
    comments,
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    axios({
      method: "PUT",
      url: "http://localhost:8080/api/v1/employee",
      data: updatedEmployee,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("USER_KEY")}`,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    history.replace("/employees");
  };

  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Details
        </Modal.Title>
        <button
          className="btn btn-close bg-primary "
          onClick={() => {
            history.replace("/employees");
          }}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name *"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Employee Id *"
              name="employee id"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Pk Email *"
              name="PK Email"
              value={pkEmail}
              onChange={(e) => setPkEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              placeholder="password *"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              placeholder="confirmPassword *"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="status *"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="nikeId *"
              name="nikeId"
              value={nikeId}
              onChange={(e) => setNikeId(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              placeholder="nikeEmail *"
              name="nikeEmail"
              value={nikeEmail}
              onChange={(e) => setNikeEmail(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="date"
              placeholder="DOB *"
              name="dob"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="date"
              placeholder="joiningDate *"
              name="joiningDate"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="contact *"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="baseLocation *"
              name="baseLocation"
              value={baseLocation}
              onChange={(e) => setBaseLocation(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="role *"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="project *"
              name="project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="projectCode *"
              name="projectCode"
              value={projectCode}
              onChange={(e) => setProjectCode(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="designation *"
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="emergencyContactName *"
              name="emergencyContactName"
              value={emergencyContact.name}
              onChange={(e) => setEmergencyContact(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="emergencyContact *"
              name="emergencyContact"
              value={emergencyContact.contact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="hasH1 *"
              name="hasH1"
              value={hasH1}
              onChange={(e) => setHasH1(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="totalExperienceInIT *"
              name="totalExperienceInIT"
              value={totalExperienceInIT}
              onChange={(e) => setTotalExperienceInIT(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="totalExperienceInPK *"
              name="totalExperienceInPK"
              value={totalExperienceInPK}
              onChange={(e) => setTotalExperienceInPK(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="totalExperienceInNIKE *"
              name="totalExperienceInNIKE"
              value={totalExperienceInNIKE}
              onChange={(e) => setTotalExperienceInNIKE(e.target.value)}
              // required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="primarySkills *"
              name="primarySkills"
              value={primarySkills}
              onChange={(e) => setPrimarySkills(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="sceondarySkills *"
              name="sceondarySkills"
              value={sceondarySkills}
              onChange={(e) => setSceondarySkills(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="address *"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="certification *"
              name="certification"
              value={certification}
              onChange={(e) => setCertification(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="status2*"
              name="status2"
              value={status2}
              onChange={(e) => setStatus2(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="comments *"
              name="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="offset-1 btn btn-danger"
          variant="cancel"
          onClick={() => {
            history.push("/employees");
          }}
          block
        >
          Cancel
        </Button>
        <Button
          className="offset-1"
          variant="success"
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
          block
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateEmployee;
