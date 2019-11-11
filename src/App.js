import React from "react";

import CSSTest from "./Components/CSSTest";
//Routes
import Map from "./Routes/Map/Map";
import SignUp from "./Routes/SignUp/SignUp";
import Login from "./Routes/Login/Login";
import Home from "./Routes/Home/Home";

//React router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Imports to handle global states
import { GlobalStateProvider } from "./utilities/StateManagement/stateManagement";
import reducer from "./utilities/StateManagement/reducer";
import initialState from "./utilities/StateManagement/initialState";

function App() {
  return (
    <GlobalStateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <React.Fragment>
            <div>
              <Route exact path="/csstest" component={CSSTest}></Route>
              <Route exact path="/" component={Map} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
