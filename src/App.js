import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/homePage" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    homeState: state.homeState,
  };
};

export default connect(mapStateToProps, null)(App);
