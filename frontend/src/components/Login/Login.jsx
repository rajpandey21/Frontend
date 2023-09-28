import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import swal from "sweetalert";
// import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login authentication code.
  function handleLogin(e) {
    e.preventDefault();
    // Code to handle login goes here
    if (validate()) {
      const FormData = require("form-data");
      let data = new FormData();
      data.append("email", email);
      data.append("password", password);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
        headers: {
          ...(data.getHeaders
            ? data.getHeaders()
            : { "Content-Type": "application/json" }),
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          localStorage.setItem("authToken", JSON.stringify(response.data));
          console.log(JSON.stringify(response.data));
          swal({
            title: "Good job!",
            text: "Successfully Logged In",
            icon: "success",
          });
          // Navigate("/Form");
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Try Again",
            text: "Login fail",
            icon: "warning",
          });
        });
    }
    props.toggle();
  }
  //code for validating user is adding something.
  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      debugger;
      result = false;
      //   toast.warning("Warning Notification !", {
      //     //position: toast.POSITION.TOP_LEFT
      //   });
    }
    if (password === "" || password === null) {
      result = false;
      //   toast.warning("Warning Notification !", {
      //     // position: toast.POSITION.TOP_LEFT
      //   });
    }

    return result;
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Select Type:
            <select>
            <option value="client">Client</option>
            <option value="employee">EMPLOYEE</option>  
            </select>
          </label>

          <button type="submit" onClick={validate}>
            Login
          </button>
        </form>
        <button onClick={props.toggle}>Close</button>
      </div>
    </div>
  );
};

export default Login;
