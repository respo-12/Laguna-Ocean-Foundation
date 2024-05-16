import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";

const sand = "#e3c088";
const blue = "#3a899b";
const black = "#000000";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here TEST VERSION
    console.log(`Username: ${username}, Password: ${password}`);
  };
  return (
    <>
      <div className>
        <Navbar />
      </div>
      <form className="login bg-white p-4">
        <h3 className="text-center">Welcome Back!</h3>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="jane.doe@gmail.com"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Remember Must Be At Least 8 Characters"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="checkbox"
            className="custom-control custom-checkbox"
            id="check"
          />
          <label htmlFor="check" className="custom-input-label ms-2">
            Remember Me
          </label>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: blue }}
          >
            Login
          </button>
        </div>
        <p className="text-center mt-2">
          <a href="">Forgot Password?</a>
        </p>
        <p className="text-center mt-2">
          Don't Have an Account?
          <a href="./signup" className="ms-2">
            Sign Up
          </a>
        </p>
      </form>
    </>
  );
}
