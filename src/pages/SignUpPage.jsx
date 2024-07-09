import React from "react";
import { Formik } from "formik";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../assets/LogoNew.png";
import { IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpPage() {
  const url = "https://668a90262c68eaf3211d2977.mockapi.io/users";
  const navigate = useNavigate();

  function handleSignUp(values) {
    axios
      .post(url, {
        userName: values.name,
        email: values.email,
        password: values.password,
        cart: [],
      })
      .then((response) => {
        console.log(response);
        navigate("../login");
      });
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="lg:w-1/2 flex flex-col justify-center items-center shadow sm:rounded-lg  my-9 xl:w-5/12 p-6 bg-white sm:p-12">
        <div>
          <img src={logo} className="w-mx-auto h-20" alt="Logo" />
        </div>
        <div className=" flex flex-col items-center">
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button
                onClick={() => navigate("../")}
                className="mt-5 tracking-wide font-semibold bg-[#CED2DD] text-white-500 w-full max-w-xs py-4 rounded-lg hover:bg-[#ced2dd95] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <IoHomeOutline className="w-4" />
                <span className="ml-4">Back to home</span>
              </button>
            </div>

            <div className="my-10 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign Up to see what's hidden
              </div>
            </div>

            <div className="mx-auto max-w-xs">
              <Formik
                initialValues={{ email: "", password: "", name: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Name is required";
                  }
                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "Password is required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    handleSignUp(values);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      className="w-80 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500">{errors.name}</div>
                    )}

                    <input
                      className="w-80 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500">{errors.email}</div>
                    )}
                    <input
                      className="w-80 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500">{errors.password}</div>
                    )}
                    <p className="mt-6 text-xs text-gray-600">
                      <a
                        href=""
                        className="border-b border-gray-500 border-dotted mx-2"
                      >
                        Terms of Service
                      </a>
                      and its
                      <a
                        href=""
                        className="border-b border-gray-500 border-dotted mx-2"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 tracking-wide font-semibold bg-[#fc6900ad] text-white-500 w-full py-4 rounded-lg hover:bg-[#fc690068] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="">Sign Up</span>
                    </button>
                    <p className="text-center text-sm mt-2">
                      Do you have an account?{" "}
                      <Link className="text-blue-500 underline" to={"../login"}>
                        Login
                      </Link>
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
