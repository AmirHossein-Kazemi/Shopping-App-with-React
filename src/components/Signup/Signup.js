import React from "react";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./signup.css";

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  passConfirm: "",
};

const onSubmit = (values) => {
  console.log(values);
  // axios
  //   .post("http://localhost:3001/users", values)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(2, "name is too short 2 at least"),
  email: Yup.string()
    .email("invalid email format")
    .required("Email is Required"),
  number: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{8,}$/, "invalid phone number")
    .nullable(),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*?])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is Required"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input name="name" formik={formik} label="Name" />
        <Input name="email" formik={formik} label="Email" type="email" />
        <Input name="number" formik={formik} label="Phone Number" type="tel" />
        <Input
          name="password"
          formik={formik}
          label="Password"
          type="password"
        />
        <Input
          name="passConfirm"
          formik={formik}
          label="Password Confirmation"
          type="password"
        />
        <button className="btn" style={{width:"100%"}} type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
