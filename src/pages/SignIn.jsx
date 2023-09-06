import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContextProvider";
import { useColorContext } from "../contexts/ColorContextProvider";
import { useFormik } from "formik";
import * as Yup from "yup";
import { users } from "../data/dummy";

function SignIn() {
  const { token, setToken, setUser } = useAuthContext();
  const { currentColor } = useColorContext();
  const [errors, setErrors] = useState([]);
  // const user = {
  //   name: "sahos",
  //   email: "sahos@gmail.com",
  // };
  // Validation
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  // Use Formik for form validation submit
  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "123456",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      if (values.email && values.password) {
        const user = users.find((user) => user.email == values.email);
        if (user) {
          if (user.password == values.password) {
            setUser(user.name);
            setToken(user.id);
            console.log(user);
          } else {
            setErrors(["Your password is wrong"]);
          }
        } else {
          setErrors(["Your email is not exist"]);
        }
        console.log(errors);
      }
    },
  });

  if (token != null) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign in</h1>
          <form onSubmit={formik.handleSubmit}>
            {errors && errors.map((error, key) => <div key={key}>{error}</div>)}
            <div className="mb-4">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded "
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm font-medium">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded "
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm font-medium">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              style={{ backgroundColor: currentColor }}
            >
              Sign In Account
            </button>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Have you no acouunt?
          <Link
            className="no-underline border-b border-blue "
            style={{ color: currentColor }}
            to="/signup"
          >
            Create Account
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignIn;
