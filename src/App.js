import React from "react";

//Components
import Header from "./Components/Header/header";

//Routes
import Map from "./Routes/Map/Map";
import SignUp from "./Routes/SignUp/signUp";

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
            <Header />
            <div>
              <Route exact path="/" component={Map} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
