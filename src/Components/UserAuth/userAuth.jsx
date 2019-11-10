import React from "react";
import "./userAuth.css";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";

const UserAuth = () => {
  const [{ login, user }, dispatch] = useStateValue();

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
      <p>{user.currentUser ? "Logout" : "Login"}</p>
    </div>
  );
};

export default UserAuth;
