import React from "react";
import './App.css';
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import Login from "./Components/Login-signup/Login";
import Signup from "./Components/Login-signup/Signup";
import BillFlow from "./Components/Bill/BillFlow";
import Navbarr from "./Components/Navbar/Navbarr";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Switch>
          
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/bill">
            <BillFlow />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
