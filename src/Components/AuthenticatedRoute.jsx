import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../utilities/base";

function AuthenticatedRoute({ component: Component, ...rest }) {
  const [loggedIn, setLoggedIn] = React.useState(undefined);
  React.useEffect(() => {
    auth.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);
  if (loggedIn === undefined) {
    return <h1>loading...</h1>;
  } else {
    return (
      <Route
        {...rest}
        render={props => {
          return loggedIn ? (
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
