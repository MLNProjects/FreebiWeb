import "./login.css";
import React, { useCallback } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import auth from "../../utilities/base";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";

const Login = props => {
  const [{ login, user }, dispatch] = useStateValue();

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.auth().signInWithEmailAndPassword(email.value, password.value);
      dispatch({
        type: "changeAuthState",
        user: { currentUser: auth.auth().currentUser }
      });
      dispatch({
        type: "toggleLogin",
        login: { toggle: false }
      });
      console.log("User Authenticated");
    } catch (error) {
      window.alert("Username and or password not recognized :(");
      console.log("Authentication failure");
    }
  }, []);

  return (
    <div
      id="login-wrapper"
      className={login.toggle ? "loginOverlay activeLogin" : "loginOverlay"}
    >
      <div className="loginOverlay-content">
        <div className="signin-wrapper">
          <h1>Log in to use this service</h1>
          <form onSubmit={handleLogin}>
            <label>
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Log in</button>
          </form>
          <Link className="link" to="/signup">
            Click here to sign up!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
