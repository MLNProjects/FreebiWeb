import React from "react";
//React router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import CSSTest from "./Components/CSSTest";
import SmoothingTestBed from "./Experimental/SmoothingTestBed";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
//Routes
import Map from "./Routes/Map/Map";
import SignUp from "./Routes/SignUp/SignUp";
import initialState from "./utilities/StateManagement/initialState";
import reducer from "./utilities/StateManagement/reducer";
//Imports to handle global states
import { GlobalStateProvider } from "./utilities/StateManagement/stateManagement";
// import components
import AuthenticatedRoute from "./Components/AuthenticatedRoute";

function App() {
  return (
    <GlobalStateProvider
      initialState={initialState}
      reducer={reducer}
    >
      <Router>
        <Switch>
          <React.Fragment>
            <div>
              <Route
                exact
                path="/experimental"
                component={SmoothingTestBed}
              ></Route>
              <Route
                exact
                path="/csstest"
                component={CSSTest}
              ></Route>
              <AuthenticatedRoute exact path="/map" component={Map} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/" component={Home} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
