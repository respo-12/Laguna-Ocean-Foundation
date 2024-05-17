import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { FIREBASE_AUTH } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const sand = "#e3c088";
const blue = "#3a899b";
const black = "#000000";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    // Handle login logic here TEST VERSION
    e.preventDefault();
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password).then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        setErrorMessage("Wrong Password or Account Doesn't Exist");
      }
    });
  }
  return (
    <>
      <div className>
        <Navbar />
      </div>
      <form className="login bg-white p-4" onSubmit={handleLogin}>
        <h3 className="text-center">Welcome Back!</h3>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="jane.doe@gmail.com"
            className="form-control"
            onChange={(e) => { setEmail(e.target.value) }} // Update password state
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Remember Must Be At Least 8 Characters"
            className="form-control"
            onChange={(e) => { setPassword(e.target.value) }} // Update password state
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
        {errorMessage != '' && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
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
