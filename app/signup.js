import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { Alert } from "react-bootstrap";
import { FIREBASE_AUTH,FIRESTORE_DB,doesDocExist } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "./contexts/AuthContext";
const sand = "#e3c088";
const blue = "#3a899b";
const black = "#000000";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  var passwordMatch = password === confirmPassword;
  const {signup} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e){
    // Handle login logic here TEST VERSION
    e.preventDefault();
    if (!passwordMatch) {
      return setError("Passwords do not match");
      
    }
    // Create user with email and password
    setError("");
    setLoading(true);
    await signup(email, password).then(() => {
      window.location.href = "/";
    }).catch((error) => {
      console.log(error);
      if (error.code === "auth/weak-password") {
        return setError("Password is too weak must be at least 6 characters");
      }
      else if (error.code === "auth/email-already-in-use") {
        return setError("Email already in use");
      }
    });
    doesDocExist("User", email)
    .then(exists => {
      if (exists) {
        console.log("User already exists");
        console.error("User already exists")
      } else {
        console.log("Document does not exist.");
        try{
          setDoc(doc(FIRESTORE_DB, "User", email), {
            First: firstName,
            Last: lastName,
          });
          console.log("User signed up and added to Firestore");
        }
        catch{
          console.log("Error adding user to Firestore: ",error.message)
        }
      }
    })
    .catch(error => {
      console.error("Error checking document existence:", error);
    });
    e.target.reset();
    
    
  };
  const handleGoogleLogin = async (e) => {
    const GoogleProvider = await new GoogleAuthProvider();
    const result = await signInWithPopup(FIREBASE_AUTH, GoogleProvider)
    return result.user;
  }
  return (
    <>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    </head>
      <div className ="toReplace">
        <Navbar />
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="login p-4" onSubmit={handleSignUp}>
        <h3 className="text-center text-white">Join the conservation efforts of Laguna Beach!</h3>
        <div className="mb-2">
          <label htmlFor="email" className="text-white fs-5">First Name</label>
          <input
            type="name"
            placeholder="Jane"
            className="form-control"
            onChange={(e) => { setFirstName(e.target.value) }} // Update last name state
          />
        </div>
        <div className="mb-2">
          <label htmlFor="name" className="text-white fs-5">Last Name</label>
          <input
            type="name"
            placeholder="Doe"
            className="form-control"
            onChange={(e) => { setLastName(e.target.value) }} // Update last name state
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-white fs-5">Email</label>
          <input
            type="email"
            placeholder="jane.doe@gmail.com"
            className="form-control"
            onChange={(e) => { setEmail(e.target.value) }} // Update password state
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="text-white fs-5">Password</label>
          <input
            type="password"
            placeholder="Must be at least 6 characters"
            className="form-control"
            onChange={(e) => { setPassword(e.target.value) }} // Update password state
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="text-white fs-5">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-type Password"
            className="form-control"
            onChange={(e) => { setConfirmPassword(e.target.value) }} // Update confirm password state
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: blue, color: 'white'}}
            disabled={loading}
          >
            Sign Up
          </button>
        </div>
        <p className="text-center mt-2 text-white">
          Have an Account? Login <a style={{color:blue}} href="./login">Here</a>
        </p>
        <div className="d-flex justify-content-center">
      
        <button 
          type="submit"
          className="btn "
          style={{ backgroundColor: sand }}
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <i class="bi bi-google" style={{ color: black, marginRight: '10px' }}></i>
          Continue With Google
        </button>
      </div>
      </form>
    </>
  );
}