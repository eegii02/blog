import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data === "Success") {
          location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] ">
      <div className=" w-[400px]">
        <h2 className="mb-4 text-2xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full py-1 border-b-2 outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email:"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full py-1 border-b-2 outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password:"
            />
          </div>
          <button className="w-full py-2 mt-6 font-semibold text-white bg-blue-500 rounded-md">
            Login
          </button>
        </form>
        <br />
        <p>Not Registered</p>
        <Link to="/register">
          <button className="w-full py-2 mt-4 font-semibold text-white bg-green-500 rounded-md">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
