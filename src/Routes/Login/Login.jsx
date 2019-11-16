import "./Login.css";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import auth from "../../utilities/base";
import { GlobalState } from "../../utilities/StateManagement/stateManagement";
import FormInput from "../../Components/FormInput";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [{ login }, dispatch] = React.useContext(GlobalState);
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      dispatch({
        type: "changeAuthState",
        user: { uid: auth.auth().currentUser.uid },
      });
      dispatch({
        type: "toggleLogin",
        login: { toggle: false },
      });
      history.push("/map");

      console.log("User Authenticated");
    } catch (error) {
      window.alert("Username and or password not recognized :(");
      console.log("Authentication failure");
    }
  }, []);

  return (
    <div id="sign-form-wrapper">
      <form onSubmit={handleLogin} id="sign-form">
        <h1 id="form-header">Sign in</h1>
        <h4 id="form-sub-text">
          Start the <em>pararescue</em>.
        </h4>

        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />

        <button id="form-button" className="primary">
          Sign in
        </button>
        <Link id="form-link" to="/signup">
          No account, click here to sign up!
        </Link>
      </form>
    </div>
  );
};

export default Login;
