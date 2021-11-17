import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
export const Signup = ({ sendDataToParent }) => {
  const [employee, setEmployee] = useState([]);
  const validate = Yup.object({
    empId: Yup.number().required("Required"),
    name: Yup.string()
      .min(5, "Must be 5 characters or less")
      .required("Required"),
    nikeEmail: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    pkEmail: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
    designation: Yup.string().required("Required"),
    contact: Yup.string().length(10),
    emergencyContact_name: Yup.string().required("Required"),
    emergencyContact_contact: Yup.string().length(10),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        empId: "",
        pkEmail: "",
        password: "",
        confirmPassword: "",
        status: "",
        nikeId: "",
        nikeEmail: "",
        dob: "",
        joiningDate: "",
        contact: "",
        baseLocation: "",
        role: "",
        project: "",
        projectCode: "",
        designation: "",
        emergencyContact: {
          name: "",
          contact: "",
        },
        hasH1: "",
        totalExperienceInIT: "",
        totalExperienceInPK: "",
        totalExperienceInNIKE: "",
        primarySkills: "",
        sceondarySkills: "",
        address: "",
        certification: "",
        status2: "",
        comments: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const temp = {
          name: values.name,
          empId: values.empId,
          pkEmail: values.pkEmail,
          password: values.password,
          status: values.status,
          nikeId: values.nikeId,
          nikeEmail: values.nikeEmail,
          dob: values.DOB,
          joiningDate: values.joiningDate,
          contact: values.contact,
          baseLocation: values.baseLocation,
          role: values.role,
          project: values.project,
          projectCode: values.projectCode,
          designation: values.designation,
          emergencyContact: {
            name: values.emergencyContact_name,
            contact: values.emergencyContact_contact,
          },
          hasH1: values.hasH1,
          totalExperienceInIT: values.totalExperienceInIT,
          totalExperienceInPK: values.totalExperienceInPK,
          totalExperienceInNIKE: values.totalExperienceInNIKE,
          primarySkills: values.primarySkills,
          sceondarySkills: values.sceondarySkills,
          address: values.address,
          certification: values.certification,
          status2: values.status2,
          comments: values.comments,
        };
        setEmployee(temp);
        sendDataToParent(temp);
        // console.log(employee);
      }}
    >
      {(formik) => (
        <div className="mb-5">
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Pk Email" name="pkEmail" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <TextField label="Employee Id" name="empId" type="text" />

            <TextField label="Status" name="status" type="text" />
            <TextField label="Nike Id" name="nikeId" type="text" />
            <TextField label="Nike Email" name="nikeEmail" type="email" />
            <TextField label="Date Of Birth" name="DOB" type="date" />
            <TextField label="Joining Date" name="joiningDate" type="date" />
            <TextField label="Contact" name="contact" type="text" />
            <TextField label="Base Location" name="baseLocation" type="text" />
            <TextField label="Role" name="role" type="text" />
            <TextField label="Project" name="project" type="text" />
            <TextField label="Project Code" name="projectCode" type="text" />
            <TextField label="Designation" name="designation" type="text" />
            <TextField
              label="Emergency Contact Name"
              name="emergencyContact_name"
              type="text"
            />
            <TextField
              label="Emergency Contact"
              name="emergencyContact_contact"
              type="text"
            />
            <TextField label="Has H1" name="hasH1" type="text" />
            <TextField
              label="Total Experience In IT"
              name="totalExperienceInIT"
              type="text"
            />
            <TextField
              label="Total Experience In PK"
              name="totalExperienceInPK"
              type="text"
            />
            <TextField
              label="Total Experience In NIKE"
              name="totalExperienceInNIKE"
              type="text"
            />
            <TextField
              label="Primary Skills"
              name="primarySkills"
              type="text"
            />
            <TextField
              label="Sceondary Skills"
              name="sceondarySkills"
              type="text"
            />
            <TextField label="Address" name="address" type="text" />
            <TextField label="Certification" name="certification" type="text" />
            <TextField label="Status" name="status2" type="text" />
            <TextField label="Comments" name="comments" type="text" />
            <div className="row">
              <button
                className="col-3 offset-2 btn btn-dark mt-3"
                type="submit"
              >
                Register
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
  );
};
