import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../Services/signupService";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  passConfirm: "",
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
      "Must Contain 8 Characters, Uppercase, Lowercase, Number and Special Character"
    ),
  passConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is Required"),
});

const Signup = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  const navigate = useNavigate();

  const setAuth = useAuthActions();
  const auth = useAuth();

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
  }, [redirect, auth]);

  const onSubmit = async (values) => {
    const { name, email, number, password } = values;

    const userData = {
      name,
      email,
      number,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      setErrorMessage(null);
      navigate(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        toast.error(errorMessage);
      }
    }
  };

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
        <button
          className="btn"
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Signup
        </button>
        <Link to={`/login?redirect=${redirect}`}>
          <p style={{ marginTop: "1rem" }}> Have an Account ?</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
