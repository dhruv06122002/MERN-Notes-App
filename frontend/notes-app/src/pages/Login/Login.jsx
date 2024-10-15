import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    //Login API
    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      // Handle successful login response
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle login error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occured. Please try again");
      }
    }
  };
  return (
    // <>
    //   <Navbar />
    //   <div className="flex items-center justify-center mt-28">
    //     <div className="w-96 border rounded bg-white px-7 py-10">
    //       <form onSubmit={handleLogin}>
    //         <h4 className="text-2xl mb-7">Login</h4>
    //         <input
    //           type="text"
    //           placeholder="Email"
    //           className="input-box"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <PasswordInput
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

    //         <button type="submit" className="btn-primary">
    //           Login
    //         </button>
    //         <p className="text-sm text-center mt-4">
    //           Not Registered yet?{""}
    //           <Link to="/signUp" className="font-medium text-primary underline">
    //             Create an account
    //           </Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </>

    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-yellow-100">
        <div className="w-full max-w-md border border-yellow-300 shadow-lg rounded-lg bg-white px-10 py-12">
          <form onSubmit={handleLogin}>
            <h4 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Welcome Back
            </h4>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Email"
                className="input-box border border-yellow-300 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-medium py-2 px-4 rounded-lg w-full transition ease-in-out duration-200"
            >
              Login
            </button>

            <p className="text-sm text-center mt-6 text-gray-700">
              Not registered yet?{" "}
              <Link
                to="/signUp"
                className="font-medium text-yellow-600 hover:text-yellow-700 underline transition ease-in-out duration-200"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
