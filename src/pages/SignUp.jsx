import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContextProvider";
import { useColorContext } from "../contexts/ColorContextProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const { token, setToken, setUser } = useAuthContext();
  const { currentColor } = useColorContext();

  // Validation
  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),

    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  // Use Formik for form validation submit
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              style={{ backgroundColor: currentColor }}
            >
              Create Account
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-main"
            style={{ color: currentColor }}
            to="/signin"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
