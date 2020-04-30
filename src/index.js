import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import App from "./App";
import About from "./About";
import "./index.css";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div className="app">
      <Navbar className="gray-background">
        <Navbar.Brand>
          <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
            Tootie
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/getting-started">Getting Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
