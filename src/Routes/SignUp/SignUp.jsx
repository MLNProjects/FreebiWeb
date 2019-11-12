import React, { useCallback } from "react";
import auth from "../../utilities/base";
import FormInput from "../../Components/FormInput";
import "./SignUp.css";

const SignUp = () => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      console.log("User created");
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div id="sign-up-wrapper">
      <form onSubmit={handleSignUp} id="sign-up-form">
        <h1 id="primary-text">Sign up</h1>
        <h4 id="sub-text">
          Help find the lost, join <em>pararescue</em>.
        </h4>

        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />

        <button id="sign-up-button" className="primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
