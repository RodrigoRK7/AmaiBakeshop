//import logo from './logo.svg';
//import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import { NavLink } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/login">Amai Bakeshop</Navbar.Brand>
            <Nav className="me-auto">
            <NavLink href="/login">
              Login
            </NavLink>
            <NavLink href="/signup">
              Signup
            </NavLink>
            <NavLink href="/profile">
              Profile
            </NavLink>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
