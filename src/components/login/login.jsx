import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";

export default function Login() {
  let [errorLogin, setErrorLogin] = useState("no_error_login");
  let [counter, setCounter] = useState(0);
  let navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);

  let verify_login = (username, password) => {
    var data = JSON.stringify({
      username: username,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/auth/login/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.data.accessToken === undefined) {
          setCounter((counter += 1));
          return setErrorLogin((errorLogin = "error_login"));
        }
        sessionStorage.setItem("token", response.data.accessToken);
        navigate("/profile");
      })
      .catch((error) => {
        setCounter((counter += 1));
        return setErrorLogin((errorLogin = "error_login"));
      });
  };

  return (
    <>
      <img
        className="nav_img"
        src="../../../public/Logo.png"
        alt="Logo of Dhruv-Face"
      />
      <div className="form_wrapper">
        <form
          action="GET"
          className="login_form"
          onSubmit={(e) => {
            e.preventDefault();

            let values = [username.current.value, password.current.value];

            verify_login(...values);
          }}
        >
          <h1>Dhruv Face</h1>

          <label htmlFor="username">
            Username <span className="asterix">*</span>
          </label>
          <input
            id="username"
            ref={username}
            required
            name="username"
            placeholder="SuperCoolUsername"
            type="text"
          ></input>

          <label htmlFor="password">
            Password <span className="asterix">*</span>
          </label>
          <input
            id="password"
            ref={password}
            required
            name="username"
            placeholder="SuperSecurePassword"
            type="password"
          ></input>

          <input type="submit" value="Login" />

          <p className={errorLogin}>
            Sorry, your password was incorrect. Please double-check your
            password ({counter})
          </p>

          <div className="bottom_form">
            <p>
              Dont have an account?{" "}
              <Link className="link" to="register">
                Register now!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
