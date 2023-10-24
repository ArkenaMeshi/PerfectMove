import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = ({setStateLoged, stateLoged}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [validation, setValidation] = useState({});

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/register",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        localStorage.setItem("isLogedIn", true);
        setStateLoged(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setValidation(err.response.data.errors);
      });
  };

  return (
    <div className="container-register  d-flex justify-content-center w-50 mx-auto mb-20">
      <form onSubmit={SubmitHandler}>
        <h2>
          {" "}
          <em>
            Register to save properties <br />
            and much more
          </em>
        </h2>

        <p>
          Already registered? <Link to={"/login"}>Log in </Link>
        </p>

        <div className="row mb-3">
          <label for="inputName" className="col-sm-5 col-form-label">
            {" "}
            Name{" "}
          </label>
          <div className="col-sm-10">
          {validation.name ? (
              <p className="validation-message">{validation.name.message}</p>
            ) : (
              ""
            )}
            <input
              type="text"
              className="form-control"
              id="inputName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-5 col-form-label">
            {" "}
            Email{" "}
          </label>
          <div className="col-sm-10">
            {validation.email ? (
              <p className="validation-message">{validation.email.message}</p>
            ) : (
              ""
            )}
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-5 col-form-label ">
            {" "}
            Password{" "}
          </label>
          <div className="col-sm-10">
          {validation.password ? (
              <p className="validation-message">{validation.password.message}</p>
            ) : (
              ""
            )}
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3 ">
          <label
            for="inputConfirmPassword3"
            className="col-sm-5 col-form-label"
          >
            {" "}
            Confirm Password{" "}
          </label>
          <div className="col-sm-10">
          {validation.confirmPassword ? (
              <p className="validation-message">{validation.confirmPassword.message}</p>
            ) : (
              ""
            )}
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="form-control"
              id="inputConfirmPassword3"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-info">
            Register{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
