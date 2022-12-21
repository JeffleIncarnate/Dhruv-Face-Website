import { useRef } from "react";
import { Link } from "react-router-dom";

import "./login.css";

export default function Login() {
  const username = useRef(null);
  const password = useRef(null);

  return (
    <div className="form_wrapper">
      <form action="" className="login_form">
        <h1>Login</h1>

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
  );
}
