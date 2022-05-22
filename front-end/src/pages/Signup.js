import React, { useState } from "react";
import "../styles/Form.css";
import FormSignup from "../components/FormSignup";
import FormSuccess from "../components/FormSuccess";
import axios from "axios";

const Signup = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const submitForm = (values) => {

    console.log('sign up values: ', values);
    const { username, password, email } = values;

    axios
      .post(
        'http://localhost:3001/users/register',
        {
          username: username,
          password: password,
          email: email,
          role: 1,
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
        <span className="close-btn">×</span>
        <div className="form-content-left">
          {/* <img className='form-img' src='img/img-2.svg' alt='spaceship' /> */}
        </div>
        {!isSuccess ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Signup;
