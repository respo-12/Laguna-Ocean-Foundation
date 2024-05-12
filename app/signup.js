import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import "./styles.css";

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
        <h3 className="text-center">Join the conservation efforts of Laguna Beach!</h3>
        <div className="mb-2">
          <label htmlFor="email">First Name</label>
          <input
            type="name"
            placeholder="Jane"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="name">Last Name</label>
          <input
            type="name"
            placeholder="Doe"
            className="form-control"
          />
        </div>
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
            placeholder="Must be at least 8 characters"
            className="form-control"
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: blue }}
          >
            Sign Up
          </button>
        </div>
        <p className="text-center mt-2">
          Have an Account? Login <a href="./login">Here</a>
        </p>
      </form>
    </>
  );
}
