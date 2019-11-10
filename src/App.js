import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header/header";

//Views
import MapView from "./Views/MapView/MapView";
import SignUp from "./Views/SignUp/signUp";

//React router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Imports to handle global states
import { StateProvider } from "./utilities/StateManagement/stateManagement";
import reducer from "./utilities/StateManagement/reducer";
import initialState from "./utilities/StateManagement/initialState";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <React.Fragment>
            <div style={{ height: "100vh", width: "100vw" }}>
              <Header />
              <Route exact path="/" component={MapView} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
