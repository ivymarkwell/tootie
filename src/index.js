import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import App from "./components/App";
import About from "./components/About";
import TicTacToe from "./components/TicTacToe";

import "./index.css";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div className="app">
      <Navbar className="nav">
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
        <Route path="/getting-started" component={TicTacToe} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
