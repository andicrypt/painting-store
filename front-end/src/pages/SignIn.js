import React, { useState } from "react";
import "../styles/Form.css";
import { AuthContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormSignIn from "../components/FormSignIn";

function SignIn() {
  const [isSuccess, setIsSuccess] = useState(false);

  const submitForm = (values) => {

    console.log('sign in values: ', values);
    const { username, password } = values;

    axios.post('http://localhost:3001/auth/login', 
      {
        username: username,
        password: password,
      },
    )
    .then((data) => {
      console.log(data);
      setIsSuccess(true);
    })
    .catch((error) => {
      console.log('error: ', error)
    })
  }
  
  return (
    <>
      <div className="form-container">
        {!isSuccess ? (
          <FormSignIn submitForm={submitForm}/>
        ) : (
          <div className="form-content-left">
            <h1 className="form-success">Login Successful!</h1>
          </div>
        )}
        <div className="form-content-right"></div>
      </div>
    </>
  );
}

export default SignIn;
