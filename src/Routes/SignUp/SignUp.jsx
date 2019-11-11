import React, { useCallback } from "react";
import auth from "../../utilities/base";
import FormInput from "../../Components/FormInput";

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
    <div
      style={{ margin: "auto", width: "90%", height: "50vh", marginTop: "30%" }}
    >
      <h1>SIGN UP</h1>

      <form onSubmit={handleSignUp}>
        <FormInput label="EMAIL" name="email" type="email" />
        <FormInput label="PASSWORD" name="password" type="password" />
        <div style={{ margin: "2rem" }}>
          <button className="primary">SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
