import React, { useState } from "react";
import "../styles/Form.css";
import { AuthContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const auth = useContext(AuthContext);
  //console.log(auth);

  function submitForm() {
    setIsSubmitted(true);
    auth();
    // fetch("localhost:3000/api/users/login", {
    //   method: "POST",
    //   // header: {
    //   //   "Accept": "application/json",
    //   //   "Content-Type": "application/json",
    //   // },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,        
    //   }),
    // })
    // axios.post("localhost:3000/api/users/login", {}, {
    //   auth: {
    //     username: username,
    //     password: password,
    //   }
    // })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <div className="form-content-left">
            <form className="form" noValidate>
              <h1>Get started with us today!</h1>
              <div className="form-inputs">
                <label className="form-label">Username</label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  //   value={values.username}
                  onChange={e => {
                    setUserName(e.target.value)
                    //console.log(e.target.value)
                    }
                  }
                />
              </div>
              <div className="form-inputs">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  //   value={values.email}
                  onChange={e => {
                    setPassWord(e.target.value)
                    //console.log(e.target.value);
                    }
                  }                />
              </div>
              <Link to='/'>
                <button onClick={submitForm}>Login</button>
              </Link>
            </form>
          </div>
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
