import React from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalState } from "../utilities/StateManagement/stateManagement";

function AuthenticatedRoute({ component: Component, ...rest }) {
  const [{ user }] = React.useContext(GlobalState);

  if (user.uid === undefined) {
    return <h1>loading...</h1>;
  } else {
    return (
      <Route
        {...rest}
        render={props => {
          return user.uid ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location },
              }}
            />
          );
        }}
      />
    );
  }
}

export default AuthenticatedRoute;
