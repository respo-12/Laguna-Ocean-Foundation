import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { Alert } from "react-bootstrap";
import { FIREBASE_AUTH } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "./contexts/AuthContext";

const sand = "#e3c088";
const blue = "#3a899b";
const black = "#000000";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    // Handle login logic here TEST VERSION
    e.preventDefault();
    setError("");
    setLoading(true);
    await login(email, password).then(() => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        return setError("Wrong Password or Account Doesn't Exist");
      }
    });
  }
  const handleGoogleLogin = async (e) => {
    try {
      const GoogleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(FIREBASE_AUTH, GoogleProvider);
      window.location.href = "/";
      return result.user;
    } catch (error) {
      console.error("Error during Google login: ", error);
    }
  }
  return (
    <>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    </head>
      <div>
        <Navbar />
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="login p-4" onSubmit={handleLogin}>
        <h3 className="text-center text-white">Welcome Back!</h3>
        <div className="mb-2">
          <label className="text-white fs-5" htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="jane.doe@gmail.com"
            className="form-control"
            onChange={(e) => { setEmail(e.target.value) }} // Update password state
          />
        </div>
        <div className="mb-2">
          <label className="text-white fs-5" htmlFor="password">Password</label>
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
          <label htmlFor="check" className="custom-input-label ms-2 text-white">
            Remember Me
          </label>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: blue, color: 'white' }}
          >
            Login
          </button>
        </div>
        <p className="text-center mt-2">
          <a href="" style={{color: blue}}>Forgot Password?</a>
        </p>
        <p className="text-center mt-2 text-white">
          Don't Have an Account?
          <a href="./signup" className="ms-2" style={{color: blue}}>
            Sign Up here
          </a>
        </p>
        <div className="d-flex justify-content-center">
      
        <button 
          type="submit"
          className="btn "
          style={{ backgroundColor: sand}}
          onClick={handleGoogleLogin}
        >
          <i class="bi bi-google" style={{ color: black, marginRight: '10px' }}></i>
          Continue With Google
        </button>
      </div>
      </form>
    </>
  );
}
