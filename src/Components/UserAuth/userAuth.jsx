import React from "react";
import "./userAuth.css";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";
import auth from "../../utilities/base";

const UserAuth = () => {
  const [{ login, user }, dispatch] = useStateValue();

  if (!user.currentUser) {
    return (
      <div
        onClick={() =>
          dispatch({
            type: "toggleLogin",
            login: { toggle: !login.toggle }
          })
        }
        className="authStatus-wrapper"
      >
        <p>Login</p>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          auth.auth().signOut();
          dispatch({
            type: "toggleLogin",
            login: { toggle: false }
          });
          dispatch({
            type: "changeAuthState",
            user: { currentUser: auth.auth().currentUser }
          });
          console.log("User logged out");
        }}
        className="authStatus-wrapper"
      >
        <p>Logout</p>
      </div>
    );
  }
};

export default UserAuth;
