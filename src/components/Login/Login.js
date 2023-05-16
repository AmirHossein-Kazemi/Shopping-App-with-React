import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/loginServices";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email format")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  const navigate = useNavigate();

  const setAuth = useAuthActions();
  const auth = useAuth();

  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
  }, [redirect, auth]);

  const [err, setErr] = useState(null);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setErr(null);
      navigate(redirect);
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.message);
        toast.error(err);
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
        <Input name="email" formik={formik} label="Email" type="email" />

        <Input
          name="password"
          formik={formik}
          label="Password"
          type="password"
        />
        <button
          className="btn"
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Link to={`/signup?redirect=${redirect}`}>
          <p style={{ marginTop: "1rem" }}> Not Signup ?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
